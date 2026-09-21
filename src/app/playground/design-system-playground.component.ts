import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  NbButtonComponent,
  NbBadgeComponent,
  MarqueeTickerComponent,
  NbCardComponent,
  StatCardComponent,
  MarqueeItem
} from '../shared/design-system';

@Component({
  selector: 'app-design-system-playground',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NbButtonComponent,
    NbBadgeComponent,
    MarqueeTickerComponent,
    NbCardComponent,
    StatCardComponent
  ],
  templateUrl: './design-system-playground.component.html'
})
export class DesignSystemPlaygroundComponent {
  clickCount = 0;
  testInput = '';

  announcementItems: MarqueeItem[] = [
    { text: 'AVAILABLE FOR HIRE 2025 // FULL-TIME & CONTRACT', icon: '⚡' },
    { text: 'SPECS: ANGULAR • REACT • NEXT.JS • MICROFRONTENDS', icon: '•' },
    { text: 'LOCATION: BELGRADE, RS [44.8125° N, 20.4612° E]', icon: '📍' },
    { text: 'STATUS: READY', isBadge: true, bgClass: 'bg-nb-mint' }
  ];

  incrementClick(): void {
    this.clickCount++;
  }
}
