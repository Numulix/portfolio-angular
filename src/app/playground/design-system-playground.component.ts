import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  NbButtonComponent,
  NbBadgeComponent,
  MarqueeTickerComponent,
  NbCardComponent,
  StatCardComponent
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

  incrementClick(): void {
    this.clickCount++;
  }
}
