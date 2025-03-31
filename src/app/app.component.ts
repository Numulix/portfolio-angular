import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header.component";
import { HeroComponent } from "./hero/hero.component";
import { AboutComponent } from "./about/about.component";
import { SkillsComponent } from "./skills/skills.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ExperienceComponent } from "./experience/experience.component";
import { ContactComponent } from "./contact/contact.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, HeroComponent, AboutComponent, SkillsComponent, ProjectsComponent, ExperienceComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
