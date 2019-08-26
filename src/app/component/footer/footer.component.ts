import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  year: string;
  isAbout = true;

  constructor(private router: Router) {
    this.year = new Date().getFullYear().toString();
  }

  ngOnInit() {
    this.setPage();
  }

  setPage() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
      ).subscribe((event: NavigationEnd) => {
        if (event.url === '/about') {
          this.isAbout = true;
        } else {
          this.isAbout = false;
        }
      });
  }

}
