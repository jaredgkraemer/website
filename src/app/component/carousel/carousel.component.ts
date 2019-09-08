import { Component, OnInit, HostListener, AfterViewInit } from '@angular/core';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit, AfterViewInit {
  /* List of picture filenames, have to duplicate first and last to wrap around */
  images: string[] = ['6', '1', '3', '7', '4', '2', '5', '6', '1'];
  indicators: NodeListOf<HTMLElement>;
  carousel: HTMLElement;
  timer: NodeJS.Timer;
  counter: number = 1;
  width: number = 0;
  timeDelay: number = 3500;
  isAnimating = false;

  constructor() {}

  ngOnInit() {
    this.carousel = document.querySelector('.carousel');
    this.width = window.innerWidth;
  }

  ngAfterViewInit() {
    /* Wait until components load to get all indicators and set the first one */
    this.indicators = document.querySelectorAll('.index');
    this.transform();
    this.toggleIndicator(this.counter); /* Set initial indicator */
    this.setTimer();
  }

  arrowClick(direction: string) {
    if (this.counter > this.images.length - 2 || this.counter <= 0) {
      return;
    }

    if (direction === 'next') {
      this.counter++;
      this.updateIndicatorFromArrowClick('next');
    } else if (direction === 'prev') {
      this.counter--;
      this.updateIndicatorFromArrowClick('prev');
    }

    this.transition();
    this.transform();
    this.resetTimer();
  }

  transitionEnd() {
    /* Wait until transitions end before wrapping back around */
    if (this.counter === this.images.length - 1) {
      this.counter = this.images.length - this.counter;
    } else if (this.counter === 0) {
      this.counter = this.images.length - 2;
    }
    this.transition('none');
    this.transform();
  }

  transform() {
    const size = -this.width * this.counter;
    this.carousel.style.transform = 'translateX(' + size + 'px)';
  }

  transition(type?: string) {
    if (type === 'none') {
      this.carousel.style.transition = 'none';
    } else {
      this.carousel.style.transition = 'transform 0.5s ease-in-out';
    }
  }

  indicatorClick(index: number) {
    if (index !== this.counter) {
      this.toggleIndicator(this.counter);
      this.counter = index;
      this.transition();
      this.transform();
      this.toggleIndicator(index);
      this.resetTimer();
    }
  }

  updateIndicatorFromArrowClick(index: string) {
    if (index === 'next') {
      if (this.counter === this.images.length - 1) {
        this.toggleIndicator(this.counter - 1);
        this.toggleIndicator(1);
      } else {
        this.toggleIndicator(this.counter);
        this.toggleIndicator(this.counter - 1);
      }
    } else if (index === 'prev') {
      if (this.counter === 0) {
        this.toggleIndicator(this.images.length - 2);
        this.toggleIndicator(1);
      } else {
        this.toggleIndicator(this.counter);
        this.toggleIndicator(this.counter + 1);
      }
    }
  }

  toggleIndicator(index: number) {
    this.indicators[index].classList.toggle('active');
  }

  setTimer() {
    this.timer = setInterval(() => {
      this.arrowClick('next');
    }, this.timeDelay);
  }

  resetTimer() {
    clearInterval(this.timer);
    this.setTimer();
  }

  isMobile(): boolean {
    let mobile = new RegExp(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i);
    if (mobile.test(navigator.userAgent)) {
      return true;
    } else {
      return false;
    }
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event) {
    if (!this.isMobile()) {
      this.width = event.target.innerWidth;
    }
    this.transition('none');
    this.transform();
  }
}
