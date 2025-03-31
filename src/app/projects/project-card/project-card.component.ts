import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() tags: string[] = [];
  @Input() description: string = '';
  @Input() link: string = '';
  @Input() classes: string = '';
}
