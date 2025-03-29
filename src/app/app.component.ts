import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header.component";
import { HeroComponent } from "./hero/hero.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, HeroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
