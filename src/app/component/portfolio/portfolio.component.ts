import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollService } from '../../service/scroll/scroll.service';

@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  // categories: string[][] = [['nature','urban'], ['human', 'events', 'space'], ['motion']];
  categories: string[][] = [['nature'],['urban'], ['human'], ['events'], ['space'], ['motion']];
  thumbnails: any = {
    nature: '1',
    urban: '1',
    human: '2',
    events: '4',
    motion: '1',
    space: '28',
  };

  constructor(public router: Router, public scroll: ScrollService) {}

  ngOnInit() {
    this.scroll.scrollToTop();
  }
}
