import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from "../../buttons/primary-button/button.component";
import { R2AssetsService } from '../../services/r2-assets.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ButtonComponent, RouterModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit {
  resumeUrl: string = '';

  constructor(private _r2AssetsService: R2AssetsService) {}

  ngOnInit(): void {
    this.resumeUrl = this._r2AssetsService.getAssetUrl('Jovan-Babic-CV.pdf');
  }
}
