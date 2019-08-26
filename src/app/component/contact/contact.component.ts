import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  mail() {
    const name = 'jaredgkraemer';
    const domain = 'gmail';
    window.location.href = `mailto:${name}@${domain}.com`;
  }

}
