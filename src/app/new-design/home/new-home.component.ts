import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  NbButtonComponent,
  NbBadgeComponent,
  NbCardComponent,
  StatCardComponent,
  MarqueeTickerComponent
} from '../../shared/design-system';
import { SkillsArsenalComponent } from './skills-arsenal/skills-arsenal.component';
import { BentoProjectsComponent } from './bento-projects/bento-projects.component';
import { ExperienceDeckComponent } from './experience-deck/experience-deck.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';

@Component({
  selector: 'app-new-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NbButtonComponent,
    NbBadgeComponent,
    NbCardComponent,
    StatCardComponent,
    MarqueeTickerComponent,
    SkillsArsenalComponent,
    BentoProjectsComponent,
    ExperienceDeckComponent,
    ContactSectionComponent
  ],
  templateUrl: './new-home.component.html',
  styles: [`
    :host {
      display: block;
      width: 100%;
    }
  `]
})
export class NewHomeComponent {
  resumeUrl = 'https://raspy-bonus-452c.jbabic999.workers.dev/Jovan-Babic-CV.pdf';
}
