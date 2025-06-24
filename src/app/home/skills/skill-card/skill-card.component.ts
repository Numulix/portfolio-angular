import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-card',
  standalone: true,
  imports: [],
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.css'
})
export class SkillCardComponent {
  @Input() icon: string = '';
  @Input() name: string = '';
  @Input() description: string = '';
  @Input() classes: string = '';
}
