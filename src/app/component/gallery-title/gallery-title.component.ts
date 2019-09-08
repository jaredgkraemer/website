import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'gallery-title',
  templateUrl: './gallery-title.component.html',
  styleUrls: ['./gallery-title.component.scss']
})
export class GalleryTitleComponent implements OnInit {
  title: string = '';

  constructor(private router: Router) {
    this.title = router.url.replace(/\//, '');
  }

  ngOnInit() {}
}
