import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  categories: string[] = ['nature', 'urban', 'human'];

  constructor() {}

  ngOnInit() {
    // setInterval(() => {
    //   this.categories.push(this.categories.shift());
    // }, 2000);
  }
}
