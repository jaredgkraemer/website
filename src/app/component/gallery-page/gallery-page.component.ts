import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.scss']
})
export class GalleryPageComponent implements OnInit {
  showScrollToTop: boolean = false;

  constructor() {}

  ngOnInit() {
    this.scrollToTop();
  }

  scrollToTop() {
    window.scroll({ top: 0, behavior: 'smooth' });
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    window.scrollY > window.innerWidth
      ? (this.showScrollToTop = true)
      : (this.showScrollToTop = false);
  }
}
