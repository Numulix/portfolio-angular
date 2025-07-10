import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { Header } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { Meta, Title } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, FooterComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _titleService: Title,
    private _metaService: Meta    
  ) {}

  ngOnInit(): void {
    this._router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this._activatedRoute),
      map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }

        return route;
      }),
      filter(route => route.outlet === 'primary'),
      mergeMap(route => route.data)
    ).subscribe(event => {
      if (event['title']) {
        this._titleService.setTitle(event['title'])
      }

      if (event['description']) {
        this._metaService.updateTag({ name: 'description', content: event['description'] })
      }
    })
  }

}
