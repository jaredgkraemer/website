import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  year: string;
  isAbout = true;

  constructor() {
    this.year = new Date().getFullYear().toString();
  }

  ngOnInit() {}

}
