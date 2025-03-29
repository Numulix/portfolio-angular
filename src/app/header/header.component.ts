import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class Header {

  navOpen = false;

  toggleNavOpen(): void {
    this.navOpen = !this.navOpen;
  }

}
