import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface NewNavItem {
  label: string;
  link: string;
  isRouterLink: boolean;
  hoverBg: string;
}

@Component({
  selector: 'app-new-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './new-navbar.component.html'
})
export class NewNavbarComponent {
  @Input() isMobile = false;
  @Output() linkClicked = new EventEmitter<void>();

  navItems: NewNavItem[] = [
    { label: 'About', link: '/new/home#about', isRouterLink: false, hoverBg: 'hover:bg-nb-yellow' },
    { label: 'Stack', link: '/new/home#stack', isRouterLink: false, hoverBg: 'hover:bg-nb-mint' },
    { label: 'Projects', link: '/new/home#projects', isRouterLink: false, hoverBg: 'hover:bg-nb-pink' },
    { label: 'Experience', link: '/new/home#experience', isRouterLink: false, hoverBg: 'hover:bg-nb-purple' },
    { label: 'Blog', link: '/new/blog', isRouterLink: true, hoverBg: 'hover:bg-nb-blue' },
    { label: 'Contact', link: '/new/home#contact', isRouterLink: false, hoverBg: 'hover:bg-nb-coral' },
    { label: 'Lab 🧪', link: '/playground', isRouterLink: true, hoverBg: 'hover:bg-nb-yellow' }
  ];

  onNavClick(): void {
    this.linkClicked.emit();
  }
}
