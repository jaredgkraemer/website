import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isHome = true;
  isGallery = true;
  isAbout = true;

  constructor(private router: Router) {
    this.setPage();
  }

  ngOnInit() { }

  setPage() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        if (event.url === '/home' || event.url === '/') {
          this.isHome = true;
          this.isAbout = false;
          this.isGallery = false;
        } else if (event.url === '/about') {
          this.isHome = false;
          this.isAbout = true;
          this.isGallery = false;
        } else {
          this.isHome = false;
          this.isAbout = false;
          this.isGallery = true;
        }
      });
  }

}
