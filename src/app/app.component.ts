import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { LightboxConfig } from 'ngx-lightbox';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  name = 'Jared G Kraemer Photography';

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private title: Title,
    private lightboxConfig: LightboxConfig
  ) {
    lightboxConfig.fadeDuration = 0.1;
    lightboxConfig.resizeDuration = 0.1;
    lightboxConfig.showImageNumberLabel = true;
    lightboxConfig.alwaysShowNavOnTouchDevices = true;
    lightboxConfig.wrapAround = true;

    this.setTitleToRouteData();
  }

  ngOnInit() { }

  setTitleToRouteData() {
    this.router.events.pipe(
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
      }),)
      .subscribe((page: string) => {
        const newTitle = page == 'Home' ? this.name : this.name + ' // ' + page;
        this.title.setTitle(newTitle);
      });
  }

}
