import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type StatCardVariant = 'blue' | 'yellow' | 'pink' | 'mint' | 'white';
export type StatCardTilt = 'left' | 'right' | 'slight' | 'none';

@Component({
  selector: 'app-stat-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stat-card.component.html'
})
export class StatCardComponent {
  @Input() number: string | number = '';
  @Input() label: string = '';
  @Input() subtitle: string = '';
  @Input() variant: StatCardVariant = 'blue';
  @Input() tilt: StatCardTilt = 'none';
  @Input() classes: string = '';

  get variantClass(): string {
    switch (this.variant) {
      case 'blue':
        return 'bg-nb-blue';
      case 'yellow':
        return 'bg-nb-yellow';
      case 'pink':
        return 'bg-nb-pink';
      case 'mint':
        return 'bg-nb-mint';
      case 'white':
        return 'bg-white';
      default:
        return 'bg-nb-blue';
    }
  }

  get tiltClass(): string {
    switch (this.tilt) {
      case 'left':
        return 'tilt-left';
      case 'right':
        return 'tilt-right';
      case 'slight':
        return 'tilt-slight';
      default:
        return '';
    }
  }

  get combinedClasses(): string {
    return `stat-card p-3 sm:p-4 text-center cursor-pointer select-none ${this.variantClass} ${this.tiltClass} ${this.classes}`.trim();
  }
}
