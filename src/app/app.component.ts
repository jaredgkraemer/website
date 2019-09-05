import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { LightboxConfig } from 'ngx-lightbox';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  name: string = 'Jared G Kraemer Photography';
  isHome: boolean = false;

  constructor(
    public router: Router,
    private activatedRoute: ActivatedRoute,
    private title: Title,
    private lightboxConfig: LightboxConfig
  ) {
    this.lightboxConfig.fadeDuration = 0.1;
    this.lightboxConfig.resizeDuration = 0.1;
    this.lightboxConfig.showImageNumberLabel = true;
    this.lightboxConfig.alwaysShowNavOnTouchDevices = true;
    this.lightboxConfig.wrapAround = true;

    this.setTitleToRouteData();
  }

  ngOnInit() {}

  setTitleToRouteData() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          let child = this.activatedRoute.firstChild;
          while (child) {
            if (child.firstChild) {
              child = child.firstChild;
            } else if (child.snapshot.data && child.snapshot.data['page']) {
              return child.snapshot.data['page'];
            } else {
              return null;
            }
          }
          return null;
        })
      )
      .subscribe((page: string) => {
        let newTitle: string;
        if (page === 'Home') {
          newTitle = this.name;
          this.isHome = true;
        } else {
          newTitle = this.name + ' // ' + page;
          this.isHome = false;
        }
        this.title.setTitle(newTitle);
      });
  }
}
