import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { nature } from '../../model/image-list';

@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  categories: string[][] = [['nature','urban'], ['human', 'events', 'space'], ['motion']];
  thumbnails: any = {
    nature: '1',
    urban: '1',
    human: '2',
    events: '4',
    motion: '1',
    space: '28',
  };

  constructor(private router: Router) {}

  ngOnInit() {}

  categoryClick(link: string) {
    this.router.navigateByUrl(`/${link}`);
  }
}
