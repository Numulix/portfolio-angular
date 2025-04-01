import { AfterViewInit, Component, ElementRef, HostListener, Inject, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { navItems } from '../../consts/navItems';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements AfterViewInit, OnInit, OnDestroy {
  @ViewChild('activeBox') activeBox!: ElementRef;

  @Input() navOpen: boolean = false;

  @HostListener('window:resize')
  onResize() {
    setTimeout(() => this._initActiveBox());
  }

  currentActiveEl: any = null;
  lastActiveEl: any = null;

  readonly navItems = navItems;

  private _visibilityChangeHandler: (() => void) | null = null;

  private _initActiveBox(): void {
    if (this.currentActiveEl) {
      this.activeBox.nativeElement.style.top = this.currentActiveEl.offsetTop + 'px';
      this.activeBox.nativeElement.style.left = this.currentActiveEl.offsetLeft + 'px';
      this.activeBox.nativeElement.style.width = this.currentActiveEl.offsetWidth + 'px';
      this.activeBox.nativeElement.style.height = this.currentActiveEl.offsetHeight + 'px';
      this.activeBox.nativeElement.style.opacity = 1;
    } else {
      this.activeBox.nativeElement.style.opacity = 0;
    }
  }

  constructor (@Inject(DOCUMENT) private _document: Document) {}

  ngOnInit(): void {
    this._visibilityChangeHandler = () => {
      if (this._document.visibilityState === 'visible') {
        setTimeout(() => this._initActiveBox());
      }
    };
    this._document.addEventListener('visibilitychange', this._visibilityChangeHandler);
  }

  ngOnDestroy(): void {
    if (this._visibilityChangeHandler) {
      this._document.removeEventListener('visibilitychange', this._visibilityChangeHandler);
    }
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.currentActiveEl = this._document.getElementsByClassName("active")[1] || this._document.getElementsByClassName("active")[0];
      this.lastActiveEl = this.currentActiveEl;
      this._initActiveBox();
    });
  }

  activeCurrentLink(target: EventTarget | null): void {
    if (target instanceof HTMLAnchorElement && target !== this.lastActiveEl) {
      if(this.lastActiveEl) {
         this.lastActiveEl.classList.remove('active');
      }
      target.classList.add('active');
      this.lastActiveEl = target;
      this.currentActiveEl = target;

      this.activeBox.nativeElement.style.top = target.offsetTop + 'px';
      this.activeBox.nativeElement.style.left = target.offsetLeft + 'px';
      this.activeBox.nativeElement.style.width = target.offsetWidth + 'px';
      this.activeBox.nativeElement.style.height = target.offsetHeight + 'px';
      this.activeBox.nativeElement.style.opacity = 1;
    }
  }

}
