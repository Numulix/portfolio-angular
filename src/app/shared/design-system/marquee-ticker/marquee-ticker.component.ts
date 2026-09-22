import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface MarqueeItem {
  text: string;
  icon?: string;
  isBadge?: boolean;
  bgClass?: string;
}

export const DEFAULT_MARQUEE_ITEMS: MarqueeItem[] = [
  { text: 'ANGULAR SPECIALIST', icon: '✦', isBadge: false },
  { text: 'REACT & NEXT.JS', icon: '★', isBadge: true, bgClass: 'bg-nb-yellow rotate-1' },
  { text: 'MICROFRONTEND ARCHITECTURE', icon: '✦', isBadge: false },
  { text: 'TAILWIND CSS', icon: '★', isBadge: true, bgClass: 'bg-nb-mint -rotate-1' },
  { text: 'TYPESCRIPT SAFETY', icon: '✦', isBadge: false },
  { text: 'GAMER & TCG FAN', icon: '★', isBadge: true, bgClass: 'bg-nb-pink rotate-2' },
  { text: 'VUE.JS ENTERPRISE', icon: '✦', isBadge: false },
  { text: 'E2E TESTING', icon: '★', isBadge: true, bgClass: 'bg-nb-purple -rotate-1' }
];

@Component({
  selector: 'app-marquee-ticker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './marquee-ticker.component.html',
  styles: [`
    :host {
      display: block;
      width: 100%;
    }
  `]
})
export class MarqueeTickerComponent {
  @Input() bgClass: string = 'bg-white';
  @Input() borderClass: string = 'border-y-[3px] border-black';
  @Input() paddingClass: string = 'py-3 sm:py-3.5';
  @Input() duration: string = '36s';
  @Input() classes: string = '';
  @Input() items: MarqueeItem[] = [];
  @Input() repeatCount: number = 3;

  get trackItems(): MarqueeItem[] {
    const base = this.items && this.items.length > 0 ? this.items : DEFAULT_MARQUEE_ITEMS;
    const result: MarqueeItem[] = [];
    for (let i = 0; i < this.repeatCount; i++) {
      result.push(...base);
    }
    return result;
  }
}
