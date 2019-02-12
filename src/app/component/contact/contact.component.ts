import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  isCopied:boolean = false;
  isMobile:boolean = false;

  constructor() {
    if (navigator.userAgent.match(/iPad|iPod|iPhone|Android|BlackBerry|Opera Mini|IEMobile/i)) {
      this.isMobile = true;
    }
  }

  ngOnInit() { }

  emailCopied() {
    if (!this.isMobile) {
      this.isCopied = true;

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

}
