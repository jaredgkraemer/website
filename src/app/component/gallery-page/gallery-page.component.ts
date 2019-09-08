import { Component, OnInit, HostListener } from '@angular/core';
import { ScrollService } from '../../service/scroll/scroll.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.scss'],
})
export class GalleryPageComponent implements OnInit {
  showScrollToTop: boolean = false;
  isEvents: boolean = false;

  constructor(public scroll: ScrollService, public router: Router) {}

  ngOnInit() {
    this.scroll.scrollToTop();
    if (this.router.url === '/events') {
      this.isEvents = true;
    } else {
      this.isEvents = false;
    }
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    window.scrollY > window.innerWidth ? (this.showScrollToTop = true) : (this.showScrollToTop = false);
  }
}
