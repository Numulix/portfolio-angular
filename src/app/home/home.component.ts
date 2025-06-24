import { Component } from "@angular/core";
import { HeroComponent } from "./hero/hero.component";
import { AboutComponent } from "./about/about.component";
import { SkillsComponent } from "./skills/skills.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ExperienceComponent } from "./experience/experience.component";
import { ContactComponent } from "./contact/contact.component";

@Component({
    selector: "app-home",
    templateUrl: './home.component.html',
    standalone: true,
    imports: [
        HeroComponent,
        AboutComponent,
        SkillsComponent,
        ProjectsComponent,
        ExperienceComponent,
        ContactComponent
    ]
})
export class HomeComponent {
    
}