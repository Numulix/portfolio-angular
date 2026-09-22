import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Meta, Title } from '@angular/platform-browser';
import { MarkdownComponent } from 'ngx-markdown';
import fm from 'front-matter';

interface PostAttributes {
  title?: string;
  summary?: string;
  publishedAt?: string;
  [key: string]: any;
}

@Component({
  selector: 'app-new-blog-post',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MarkdownComponent
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
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.slug = params.get('slug');
      if (this.slug) {
        this.fetchPost(this.slug);
      } else {
        this.router.navigate(['/404'], { replaceUrl: true });
      }
    });
  }

  private fetchPost(slug: string): void {
    this.isLoading = true;

    this.http.get(`/blog/${slug}.md`, { responseType: 'text' }).subscribe({
      next: (data) => {
        try {
          const parsed: any = fm(data);
          this.postAttributes = parsed.attributes || {};
          let cleanBody = parsed.body || '';
          cleanBody = cleanBody.replace(/^#\s+[^\n]+\n+(_\([^\)]+\)_\n+)?/, '');
          this.postContent = cleanBody;

          // Dynamically calculate read time (~180 words per minute)
          const words = this.postContent?.split(/\s+/).length || 0;
          const minutes = Math.max(1, Math.ceil(words / 180));
          this.readTime = `${minutes} MIN`;

          const pageTitle = this.postAttributes.title || 'Blog Post';
          this.titleService.setTitle(`${pageTitle} | Jovan Babić (Numulix)`);
          if (this.postAttributes.summary) {
            this.metaService.updateTag({
              name: 'description',
              content: this.postAttributes.summary
            });
          }
        } catch {
          this.isLoading = false;
          this.router.navigate(['/404'], { replaceUrl: true });
        } finally {
          this.isLoading = false;
        }
      },
      error: () => {
        this.isLoading = false;
        this.router.navigate(['/404'], { replaceUrl: true });
      }
    });
  }
}
