import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type BadgeVariant = 'mint' | 'yellow' | 'pink' | 'blue' | 'purple' | 'coral' | 'orange' | 'gray' | 'white' | 'dark';
export type BadgeTilt = 'left' | 'right' | 'none';

@Component({
  selector: 'app-nb-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nb-badge.component.html',
  styles: [`
    :host {
      display: inline-block;
    }
  `]
})
export class NbBadgeComponent {
  @Input() variant: BadgeVariant = 'mint';
  @Input() size: 'sm' | 'md' = 'md';
  @Input() ping: boolean = false;
  @Input() pingColor: string = 'bg-nb-black';
  @Input() tilt: BadgeTilt = 'none';
  @Input() label: string = '';
  @Input() classes: string = '';

  get variantClass(): string {
    switch (this.variant) {
      case 'mint':
        return 'bg-nb-mint text-black';
      case 'yellow':
        return 'bg-nb-yellow text-black';
      case 'pink':
        return 'bg-nb-pink text-black';
      case 'blue':
        return 'bg-nb-blue text-black';
      case 'purple':
        return 'bg-nb-purple text-black';
      case 'coral':
        return 'bg-nb-coral text-black';
      case 'orange':
        return 'bg-nb-orange text-black';
      case 'gray':
        return 'bg-nb-gray text-black';
      case 'white':
        return 'bg-white text-black';
      case 'dark':
        return 'bg-black text-white';
      default:
        return 'bg-nb-mint text-black';
    }
  }

  get sizeClass(): string {
    return this.size === 'sm' ? 'px-2 py-0.5 text-[10px]' : 'px-3 py-1 text-xs';
  }

  get tiltClass(): string {
    switch (this.tilt) {
      case 'left':
        return '-rotate-1 hover:rotate-0';
      case 'right':
        return 'rotate-1 hover:rotate-0';
      default:
        return '';
    }
  }

  get combinedClasses(): string {
    return `nb-box font-mono font-bold uppercase inline-flex items-center gap-1.5 transition-transform cursor-default select-none ${this.variantClass} ${this.sizeClass} ${this.tiltClass} ${this.classes}`.trim();
  }
}
