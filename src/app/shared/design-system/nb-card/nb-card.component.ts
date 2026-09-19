import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nb-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nb-card.component.html'
})
export class NbCardComponent {
  @Input() headerTitle: string = '';
  @Input() headerBadge: string = '';
  @Input() headerBadgeColor: string = 'bg-nb-yellow';
  @Input() hoverable: boolean = false;
  @Input() bgClass: string = 'bg-white';
  @Input() paddingClass: string = 'p-5 sm:p-6';
  @Input() classes: string = '';

  get combinedClasses(): string {
    const base = this.hoverable ? 'nb-box nb-box-hover' : 'nb-box';
    return `${base} ${this.bgClass} ${this.paddingClass} ${this.classes}`.trim();
  }
}
