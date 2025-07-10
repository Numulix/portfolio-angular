import { AfterViewInit, Component, ElementRef, HostListener, Inject, Input, OnDestroy, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { navItems } from '../../consts/navItems';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

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
    if (isPlatformBrowser(this.platformId)) {
      this._debouncedInit();
    }
  }

  currentActiveEl: any = null;
  lastActiveEl: any = null;

  readonly navItems = navItems;

  private _visibilityChangeHandler: (() => void) | null = null;
  private _loadHandler: (() => void) | null = null;
  private _initTimeout: any = null;
  private _resizeTimeout: any = null;

  private _debouncedInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (this._resizeTimeout) {
        clearTimeout(this._resizeTimeout);
      }
      this._resizeTimeout = setTimeout(() => {
        this._findActiveElement();
        this._initActiveBox();
      }, 100);
    }
  }

  private _initActiveBox(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.activeBox?.nativeElement) return;

      if (this.currentActiveEl) {
        // Force a reflow to ensure accurate measurements
        this.currentActiveEl.offsetHeight;
        
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
  }

  private _findActiveElement(): void {
    if (isPlatformBrowser(this.platformId)) {
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
  }

  constructor(
    @Inject(DOCUMENT) private _document: Document,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this._visibilityChangeHandler = () => {
        if (this._document.visibilityState === 'visible') {
          this._debouncedInit();
        }
      };

      this._loadHandler = () => {
        this._debouncedInit();
      };

      this._document.addEventListener('visibilitychange', this._visibilityChangeHandler);
      this._document.defaultView?.addEventListener('load', this._loadHandler);
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (this._visibilityChangeHandler) {
        this._document.removeEventListener('visibilitychange', this._visibilityChangeHandler);
      }
      if (this._loadHandler) {
        this._document.defaultView?.removeEventListener('load', this._loadHandler);
      }
      if (this._initTimeout) {
        clearTimeout(this._initTimeout);
      }
      if (this._resizeTimeout) {
        clearTimeout(this._resizeTimeout);
      }
    }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Initial positioning after view init
      this._initTimeout = setTimeout(() => {
        this._findActiveElement();
        if (this.currentActiveEl) {
          this.currentActiveEl.setAttribute('aria-current', 'page');
        }
        this._initActiveBox();
      }, 0);

      // Backup positioning after everything is loaded
      if (this._document.readyState === 'complete') {
        this._debouncedInit();
      }
    }
  }

  activeCurrentLink(target: EventTarget | null): void {
    if (isPlatformBrowser(this.platformId)) {
      if (target instanceof HTMLAnchorElement && target !== this.lastActiveEl) {
        if (this.lastActiveEl) {
          this.lastActiveEl.classList.remove('active');
          this.lastActiveEl.removeAttribute('aria-current');
        }
        target.classList.add('active');
        target.setAttribute('aria-current', 'page');
        this.lastActiveEl = target;
        this.currentActiveEl = target;
        this._initActiveBox();
      }
    }
  }
}

