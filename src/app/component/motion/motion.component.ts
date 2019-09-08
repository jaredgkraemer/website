import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../../service/scroll/scroll.service';

@Component({
  selector: 'motion',
  templateUrl: './motion.component.html',
  styleUrls: ['./motion.component.scss']
})
export class MotionComponent implements OnInit {

  constructor(public scroll: ScrollService) {}

  ngOnInit() {
    this.scroll.scrollToTop();
  }
}
