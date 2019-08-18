import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  copyrightYear: string;
  isAbout = true;

  constructor(private router: Router) {
    this.copyrightYear = new Date().getFullYear().toString();
    this.setPage();
  }

  ngOnInit() { }

  setPage() {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
        if (event.url === '/about') {
          this.isAbout = true;
        } else {
          this.isAbout = false;
        }
      });
  }

}
