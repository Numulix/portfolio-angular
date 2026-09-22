import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { NbButtonComponent } from '../../shared/design-system';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterModule, NbButtonComponent],
  templateUrl: './not-found.component.html',
  styles: [`
    :host {
      display: block;
      width: 100%;
    }
  `]
})
export class NotFoundComponent {
  constructor(private router: Router) {}

  get isNewRoute(): boolean {
    return this.router.url.startsWith('/new');
  }

  get homeUrl(): string {
    return this.isNewRoute ? '/new/home' : '/';
  }

  get blogUrl(): string {
    return this.isNewRoute ? '/new/blog' : '/blog';
  }
}
