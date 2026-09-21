import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bentoProjects, BentoProjectItem } from '../../../../consts/projects';
import { NbBadgeComponent, NbButtonComponent } from '../../../shared/design-system';

@Component({
  selector: 'app-bento-projects',
  standalone: true,
  imports: [CommonModule, NbBadgeComponent, NbButtonComponent],
  templateUrl: './bento-projects.component.html',
  styles: [`
    :host {
      display: block;
      width: 100%;
    }
  `]
})
export class BentoProjectsComponent {
  projects: BentoProjectItem[] = bentoProjects;
}
