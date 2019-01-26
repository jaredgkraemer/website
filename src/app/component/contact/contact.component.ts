import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  isCopied:boolean = false;

  constructor() { }

  ngOnInit() { }
  
  emailCopied() {
    this.isCopied = true;
    console.log("isCopied:", this.isCopied);

    var cpy = function(e: ClipboardEvent) {
      e.preventDefault();
      e.clipboardData.setData('text/plain', "jaredgkraemer@gmail.com");
    }

    document.addEventListener('copy', cpy);
    document.execCommand('copy');
    document.removeEventListener('copy', cpy);

    setTimeout(() => { this.isCopied = false; console.log("isCopied:", this.isCopied); }, 2000);
  }

}
