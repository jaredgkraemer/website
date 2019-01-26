import { Component, OnInit } from '@angular/core';

const email:string = "jaredgkraemer@gmail.com";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  isCopied:boolean = false;

  constructor() { }

  ngOnInit() { }

  emailCopied() {
    this.isCopied = true;
    console.log("isCopied:", this.isCopied);

    var cpy = function(e: ClipboardEvent) {
      e.preventDefault();
      e.clipboardData.setData('text/plain', (email));
    }

    document.addEventListener('copy', cpy);
    document.execCommand('copy');
    document.removeEventListener('copy', cpy);


    setTimeout(() => { this.isCopied = false; console.log("isCopied:", this.isCopied); }, 3000);

  }

}
