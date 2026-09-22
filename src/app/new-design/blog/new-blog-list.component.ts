import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PostMetadata } from '../../../consts/types';

@Component({
  selector: 'app-new-blog-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
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
  allPosts: PostMetadata[] = [];
  filteredPosts: PostMetadata[] = [];
  searchQuery = '';
  sortOrder: 'newest' | 'oldest' = 'newest';
  isLoading = true;

  private readonly buttonColors = [
    'bg-nb-yellow hover:bg-nb-yellow-light',
    'bg-nb-mint hover:bg-emerald-300',
    'bg-nb-blue hover:bg-sky-300',
    'bg-nb-pink hover:bg-pink-300'
  ];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<PostMetadata[]>('/blog/index.json').subscribe({
      next: (posts) => {
        this.allPosts = posts || [];
        this.applyFilters();
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
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
    this.applyFilters();
  }

  formatNumber(index: number): string {
    return (index + 1).toString().padStart(2, '0');
  }

  getButtonColor(index: number): string {
    return this.buttonColors[index % this.buttonColors.length];
  }

  private applyFilters(): void {
    let result = [...this.allPosts];

    if (this.searchQuery.trim()) {
      const q = this.searchQuery.toLowerCase().trim();
      result = result.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q)
      );
    }

    result.sort((a, b) => {
      const dateA = this.parseDate(a.publishedAt);
      const dateB = this.parseDate(b.publishedAt);
      return this.sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });

    this.filteredPosts = result;
  }

  private parseDate(dateStr: string): number {
    if (!dateStr) return 0;
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
