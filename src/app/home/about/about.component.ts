import { Component } from '@angular/core';
import { aboutItems } from '../../../consts/aboutItems';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  readonly aboutItems = aboutItems;
}
