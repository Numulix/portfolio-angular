import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  @Input() paddingClass: string = 'py-2.5';
  @Input() duration: string = '26s';
  @Input() classes: string = '';
}
