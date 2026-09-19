import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export type ButtonVariant = 'yellow' | 'mint' | 'pink' | 'purple' | 'blue' | 'white' | 'dark';
export type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-nb-button',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nb-button.component.html'
})
export class NbButtonComponent {
  @Input() variant: ButtonVariant = 'yellow';
  @Input() size: ButtonSize = 'md';
  @Input() href: string = '';
  @Input() routerLink: string | any[] = '';
  @Input() target: string = '_self';
  @Input() rel: string = 'noopener noreferrer';
  @Input() icon: string = '';
  @Input() iconPosition: 'leading' | 'trailing' = 'trailing';
  @Input() label: string = '';
  @Input() classes: string = '';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled: boolean = false;

  get variantClass(): string {
    switch (this.variant) {
      case 'yellow':
        return 'bg-nb-yellow hover:bg-nb-yellow-light text-black';
      case 'mint':
        return 'bg-nb-mint hover:bg-emerald-200 text-black';
      case 'pink':
        return 'bg-nb-pink hover:bg-pink-200 text-black';
      case 'purple':
        return 'bg-nb-purple hover:bg-purple-200 text-black';
      case 'blue':
        return 'bg-nb-blue hover:bg-sky-200 text-black';
      case 'white':
        return 'bg-white hover:bg-nb-cream text-black';
      case 'dark':
        return 'bg-black text-white hover:bg-neutral-800';
      default:
        return 'bg-nb-yellow hover:bg-nb-yellow-light text-black';
    }
  }

  get sizeClass(): string {
    switch (this.size) {
      case 'sm':
        return 'px-3 py-1 text-xs';
      case 'lg':
        return 'px-6 py-3 text-base';
      case 'md':
      default:
        return 'px-4 py-2 text-sm';
    }
  }

  get combinedClasses(): string {
    return `nb-btn ${this.variantClass} ${this.sizeClass} ${this.classes} ${this.disabled ? 'opacity-50 pointer-events-none' : ''}`.trim();
  }
}
