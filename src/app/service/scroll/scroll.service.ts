import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  constructor() {}

  scrollToTop() {
    window.scroll({ top: 0, behavior: 'smooth' });
  }
}
