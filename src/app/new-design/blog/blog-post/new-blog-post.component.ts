import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Meta, Title } from '@angular/platform-browser';
import { MarkdownComponent } from 'ngx-markdown';
import fm from 'front-matter';
import { NbBadgeComponent, NbButtonComponent } from '../../../shared/design-system';

interface PostAttributes {
  title?: string;
  summary?: string;
  publishedAt?: string;
  tags?: string[];
  [key: string]: any;
}

@Component({
  selector: 'app-new-blog-post',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MarkdownComponent,
    NbBadgeComponent,
    NbButtonComponent
  ],
  templateUrl: './new-blog-post.component.html',
  styleUrls: ['./new-blog-post.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewBlogPostComponent implements OnInit {
  slug: string | null = null;
  postContent: string | null = null;
  postAttributes: PostAttributes = {};
  readTime = '5 MIN';
  categoryLabel = 'ENGINEERING LOG';
  categoryColor = 'bg-nb-yellow';
  isLoading = true;
  loadError = false;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.slug = params.get('slug');
      if (this.slug) {
        this.fetchPost(this.slug);
      }
    });
  }

  private fetchPost(slug: string): void {
    this.isLoading = true;
    this.loadError = false;

    this.http.get(`/blog/${slug}.md`, { responseType: 'text' }).subscribe({
      next: (data) => {
        try {
          const parsed: any = fm(data);
          this.postAttributes = parsed.attributes || {};
          let cleanBody = parsed.body || '';
          cleanBody = cleanBody.replace(/^#\s+[^\n]+\n+(_\([^\)]+\)_\n+)?/, '');
          this.postContent = cleanBody;

          // Calculate read time
          const words = this.postContent?.split(/\s+/).length || 0;
          const minutes = Math.max(1, Math.ceil(words / 180));
          this.readTime = `${minutes} MIN`;

          // Category metadata
          if (slug.includes('pokemon-tcg-scraper-1')) {
            this.categoryLabel = 'DISCORD AUTOMATION & SCRAPING';
            this.categoryColor = 'bg-nb-pink';
          } else if (slug.includes('pokemon-tcg-scraper-2')) {
            this.categoryLabel = 'BOT ARCHITECTURE';
            this.categoryColor = 'bg-nb-blue';
          } else if (slug.includes('angular-portfolio')) {
            this.categoryLabel = 'ANGULAR & WEB VITALS';
            this.categoryColor = 'bg-nb-mint';
          }

          const pageTitle = this.postAttributes.title || 'Blog Post';
          this.titleService.setTitle(`${pageTitle} | Jovan Babić (Numulix)`);
          if (this.postAttributes.summary) {
            this.metaService.updateTag({
              name: 'description',
              content: this.postAttributes.summary
            });
          }
        } catch {
          this.loadError = true;
        } finally {
          this.isLoading = false;
        }
      },
      error: () => {
        this.loadError = true;
        this.isLoading = false;
      }
    });
  }
}
