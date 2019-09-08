import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../../service/scroll/scroll.service';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  constructor(public scroll: ScrollService) {}

  ngOnInit() {
    this.scroll.scrollToTop();
  }

  mail() {
    const name = 'jaredgkraemer';
    const domain = 'gmail';
    window.location.href = `mailto:${name}@${domain}.com`;
  }

}
