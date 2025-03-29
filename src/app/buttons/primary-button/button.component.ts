import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() buttonType: 'primary' | 'outline' = 'primary';
  @Input() href: string = '';
  @Input() target: string = '_self';
  @Input() label: string = '';
  @Input() icon: string = '';
  @Input() classes: string = '';


}
