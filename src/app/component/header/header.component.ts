import { Component, OnInit, AfterViewInit, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  hamburger: Element;
  linkContainer: Element;
  width: number = 0;
  @Input() isHome: boolean;

  constructor(public router: Router) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.hamburger = document.querySelector('.hamburger');
    this.linkContainer = document.querySelector('.link-container');
  }

  menu() {
    this.hamburger.classList.toggle('toggle');
    this.linkContainer.classList.toggle('show');
  }

  home() {
    this.router.navigateByUrl('/home');
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event) {
    this.width = event.target.innerWidth;
    if (this.width > 768 && this.hamburger.classList.contains('toggle')) {
      this.menu(); /* close menu if open and window width expands */
    }
  }
}
