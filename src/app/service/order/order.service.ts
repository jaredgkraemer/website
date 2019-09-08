import { Injectable } from '@angular/core';
import { nature, urban, human, events, space } from '../../model/image-list';

@Injectable()
export class OrderService {
  constructor() {}

  getOrder(route: string): any[][] {
    const album: any[][] = [[]];
    let order: string[][] = [[]];
    let counter = 0;

    switch (route) {
      case '/nature':
        order = nature;
        break;
      case '/human':
        order = human;
        break;
      case '/urban':
        order = urban;
        break;
      case '/events':
        order = events;
        break;
      case '/space':
        order = space;
        break;
    }

    for (let i = 0; i < order.length; i++) {
      album[i] = [];
      for (let j = 0; j < order[i].length; j++) {
        const src = '../../assets/images' + route + '/' + order[i][j] + '.jpg';

        const image = {
          src: src,
          index: counter
        };

        album[i][j] = image;
        counter++;
      }
    }

    return album;
  }
}
