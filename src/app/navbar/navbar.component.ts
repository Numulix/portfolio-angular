import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, ElementRef, HostListener, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { navItems } from '../../consts/navItems';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements AfterViewInit, AfterViewChecked {
  @ViewChild('activeBox') activeBox!: ElementRef;

  @Input() navOpen: boolean = false;

  @HostListener('window:resize')
  onResize() {
    this._initActiveBox();
  }

  currentActiveEl: any = null;
  lastActiveEl: any = null;

  readonly navItems = navItems;

  private _initActiveBox(): void {
    if (this.currentActiveEl) {
      this.activeBox.nativeElement.style.top = this.currentActiveEl.offsetTop + 'px';
      this.activeBox.nativeElement.style.left = this.currentActiveEl.offsetLeft + 'px';
      this.activeBox.nativeElement.style.width = this.currentActiveEl.offsetWidth + 'px';
      this.activeBox.nativeElement.style.height = this.currentActiveEl.offsetHeight + 'px';
    }
  }

  constructor (@Inject(DOCUMENT) private _document: Document) {}
 
  ngAfterViewInit(): void {
    this.currentActiveEl = this._document.getElementsByClassName("active")[1] || this._document.getElementsByClassName("active")[0];
    this.lastActiveEl = this._document.getElementsByClassName("active")[1] || this._document.getElementsByClassName("active")[0];    
    this._initActiveBox();
  }

  ngAfterViewChecked(): void {
    if (!this.currentActiveEl) {
      this.currentActiveEl = this._document.getElementsByClassName("active")[1];
      this.lastActiveEl = this._document.getElementsByClassName("active")[1];
      this._initActiveBox();
    }
  }

  activeCurrentLink(target: EventTarget | null): void {
    if (target instanceof HTMLAnchorElement) {
      this.lastActiveEl.classList.remove('active');
      target.classList.add('active');
      this.lastActiveEl = target;
      this.currentActiveEl = target;

      this.activeBox.nativeElement.style.top = target.offsetTop + 'px';
      this.activeBox.nativeElement.style.left = target.offsetLeft + 'px';
      this.activeBox.nativeElement.style.width = target.offsetWidth + 'px';
      this.activeBox.nativeElement.style.height = target.offsetHeight + 'px';
    }
  }

}
