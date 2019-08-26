import { Component, OnInit, AfterViewInit, HostListener, Input } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  hamburger: Element;
  links: Element;
  width: number = 0;
  @Input() isHome: boolean;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.hamburger = document.querySelector('.hamburger');
    this.links = document.querySelector('.link-container');
  }

  menu() {
    this.hamburger.classList.toggle('toggle');
    this.links.classList.toggle('show');
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event) {
    this.width = event.target.innerWidth;
    if (this.width > 768 && this.hamburger.classList.contains('toggle')) {
      this.menu();
    }
  }
}
