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
    this._initActiveBox();
  }

  currentActiveEl: any = null;
  lastActiveEl: any = null;

  readonly navItems = navItems;

  private _visibilityChangeHandler: (() => void) | null = null;
  private _initTimeout: any = null;

  private _initActiveBox(): void {
    if (!this.activeBox?.nativeElement) return;

    if (this.currentActiveEl) {
      requestAnimationFrame(() => {
        try {
          this.activeBox.nativeElement.style.top = `${this.currentActiveEl.offsetTop}px`;
          this.activeBox.nativeElement.style.left = `${this.currentActiveEl.offsetLeft}px`;
          this.activeBox.nativeElement.style.width = `${this.currentActiveEl.offsetWidth}px`;
          this.activeBox.nativeElement.style.height = `${this.currentActiveEl.offsetHeight}px`;
          this.activeBox.nativeElement.style.opacity = '1';
        } catch (error) {
          console.error('Error positioning active box:', error);
        }
      });
    } else {
      this.activeBox.nativeElement.style.opacity = '0';
    }
  }

  private _findActiveElement(): void {
    try {
      const activeElements = this._document.getElementsByClassName('active');
      this.currentActiveEl = activeElements[1] || activeElements[0] || null;
      this.lastActiveEl = this.currentActiveEl;
    } catch (error) {
      console.error('Error finding active element:', error);
      this.currentActiveEl = null;
      this.lastActiveEl = null;
    }
  }

  constructor(@Inject(DOCUMENT) private _document: Document) {}

  ngOnInit(): void {
    this._visibilityChangeHandler = () => {
      if (this._document.visibilityState === 'visible') {
        this._findActiveElement();
        this._initActiveBox();
      }
    };
    this._document.addEventListener('visibilitychange', this._visibilityChangeHandler);
  }

  ngOnDestroy(): void {
    if (this._visibilityChangeHandler) {
      this._document.removeEventListener('visibilitychange', this._visibilityChangeHandler);
    }
    if (this._initTimeout) {
      clearTimeout(this._initTimeout);
    }
  }

  ngAfterViewInit(): void {
    // Wait for the next render cycle
    this._initTimeout = setTimeout(() => {
      this._findActiveElement();
      this._initActiveBox();
    }, 0);
  }

  activeCurrentLink(target: EventTarget | null): void {
    if (target instanceof HTMLAnchorElement && target !== this.lastActiveEl) {
      if (this.lastActiveEl) {
        this.lastActiveEl.classList.remove('active');
      }
      target.classList.add('active');
      this.lastActiveEl = target;
      this.currentActiveEl = target;
      this._initActiveBox();
    }
  }
}
