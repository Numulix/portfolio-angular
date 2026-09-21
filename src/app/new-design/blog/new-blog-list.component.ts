import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NbBadgeComponent, NbButtonComponent, NbCardComponent } from '../../shared/design-system';
import { PostMetadata } from '../../../consts/types';

export interface EnrichedPost extends PostMetadata {
  category: 'pokemon' | 'angular' | 'general';
  categoryLabel: string;
  categoryColor: string;
  readTime: string;
  isSpotlight?: boolean;
  highlightTag: string;
  techTags: string[];
}

@Component({
  selector: 'app-new-blog-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NbBadgeComponent,
    NbButtonComponent,
    NbCardComponent
  ],
  templateUrl: './new-blog-list.component.html',
  styles: [`
    :host {
      display: block;
      width: 100%;
    }
  `]
})
export class NewBlogListComponent implements OnInit {
  allPosts: EnrichedPost[] = [];
  filteredPosts: EnrichedPost[] = [];
  searchQuery = '';
  activeCategory: 'all' | 'pokemon' | 'angular' | 'fullstack' = 'all';
  sortOrder: 'newest' | 'oldest' = 'newest';
  isLoading = true;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<PostMetadata[]>('/blog/index.json').subscribe({
      next: (posts) => {
        this.allPosts = posts.map((post, index) => this.enrichPost(post, index));
        this.applyFilters();
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }

  private enrichPost(post: PostMetadata, index: number): EnrichedPost {
    const slug = post.slug;
    if (slug.includes('pokemon-tcg-scraper-1')) {
      return {
        ...post,
        category: 'pokemon',
        categoryLabel: 'DISCORD AUTOMATION & SCRAPING',
        categoryColor: 'bg-nb-pink',
        readTime: '6 MIN',
        isSpotlight: true,
        highlightTag: 'AUTOMATION',
        techTags: ['Discord API', 'Node.js', 'TypeScript', 'Cheerio / Scraper', 'PokéSerbia']
      };
    } else if (slug.includes('pokemon-tcg-scraper-2')) {
      return {
        ...post,
        category: 'pokemon',
        categoryLabel: 'BOT ARCHITECTURE',
        categoryColor: 'bg-nb-blue',
        readTime: '5 MIN',
        isSpotlight: false,
        highlightTag: 'AUTOMATION',
        techTags: ['Node.js', 'Discord Bot', 'Cloudflare Workers', 'Webhooks']
      };
    } else if (slug.includes('angular-portfolio')) {
      return {
        ...post,
        category: 'angular',
        categoryLabel: 'ANGULAR & WEB VITALS',
        categoryColor: 'bg-nb-mint',
        readTime: '8 MIN',
        isSpotlight: false,
        highlightTag: 'PERFORMANCE',
        techTags: ['Angular 18', 'Lighthouse 100', 'SSR / Hydration', 'Tailwind CSS']
      };
    }

    // Default fallback
    return {
      ...post,
      category: 'general',
      categoryLabel: 'ENGINEERING LOG',
      categoryColor: 'bg-nb-yellow',
      readTime: '5 MIN',
      isSpotlight: index === 0,
      highlightTag: 'FRONTEND',
      techTags: post.tags || []
    };
  }

  get pokemonCount(): number {
    return this.allPosts.filter(p => p.category === 'pokemon').length;
  }

  get angularCount(): number {
    return this.allPosts.filter(p => p.category === 'angular').length;
  }

  get spotlightPost(): EnrichedPost | undefined {
    return this.filteredPosts.find(p => p.isSpotlight) || this.filteredPosts[0];
  }

  get regularPosts(): EnrichedPost[] {
    const spotlight = this.spotlightPost;
    if (!spotlight) return this.filteredPosts;
    return this.filteredPosts.filter(p => p.slug !== spotlight.slug);
  }

  setCategory(cat: 'all' | 'pokemon' | 'angular' | 'fullstack'): void {
    this.activeCategory = cat;
    this.applyFilters();
  }

  toggleSort(): void {
    this.sortOrder = this.sortOrder === 'newest' ? 'oldest' : 'newest';
    this.applyFilters();
  }

  onSearchChange(): void {
    this.applyFilters();
  }

  resetFilters(): void {
    this.searchQuery = '';
    this.activeCategory = 'all';
    this.applyFilters();
  }

  private applyFilters(): void {
    let result = [...this.allPosts];

    // Category filter
    if (this.activeCategory === 'pokemon') {
      result = result.filter(p => p.category === 'pokemon');
    } else if (this.activeCategory === 'angular') {
      result = result.filter(p => p.category === 'angular');
    } else if (this.activeCategory === 'fullstack') {
      result = result.filter(p => p.tags.some(t => ['nextjs', 'fullstack', 'react'].includes(t.toLowerCase())));
    }

    // Search query
    if (this.searchQuery.trim()) {
      const q = this.searchQuery.toLowerCase().trim();
      result = result.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.tags.some(t => t.toLowerCase().includes(q)) ||
        p.techTags.some(t => t.toLowerCase().includes(q))
      );
    }

    // Sort order by publishedAt (format: DD-MM-YYYY)
    result.sort((a, b) => {
      const dateA = this.parseDate(a.publishedAt);
      const dateB = this.parseDate(b.publishedAt);
      return this.sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });

    this.filteredPosts = result;
  }

  private parseDate(dateStr: string): number {
    const parts = dateStr.split('-');
    if (parts.length === 3) {
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const year = parseInt(parts[2], 10);
      return new Date(year, month, day).getTime();
    }
    return new Date(dateStr).getTime() || 0;
  }
}
