import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { OrderService } from '../../service/order/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  title: string = '';
  list: any[] = []; /* list of image objects for lightbox indexing */
  album2D: any[][] = [[]]; /* 2D array of image objects */

  constructor(
    private lightbox: Lightbox,
    private orderService: OrderService,
    private router: Router
  ) {
    this.title = router.url.replace(/\//, '');
    this.album2D = orderService.getOrder(router.url);
    this.convert2DArray(this.album2D);
  }

  ngOnInit() { }

  open(index: number) {
    this.lightbox.open(this.list, index);
  }

  convert2DArray(array2D: any) {
    for (let i = 0; i < array2D.length; i++) {
      for (let j = 0; j < array2D[i].length; j++) {
        this.list.push(array2D[i][j]);
      }
    }
  }

}
