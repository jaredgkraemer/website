import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
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
