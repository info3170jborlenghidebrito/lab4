import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}

  getProducts() {
    return [
      {
        id: 1,
        name: 'product 1',
        description: 'product 1 description',
        pictureUrl:
          'https://secure.img1-fg.wfcdn.com/im/63380051/resize-h445%5Ecompr-r85/9521/95215979/Arbre+de+bonsai+r%C3%A9aliste+en+pot+harland+buis.jpg',
        altPicture: 'Bonsai tree in pottery',
        price: 172.99,
        quantity: 10,
        comments: [
          {
            comment: 'This is good',
            evaluation: 1,
          },
        ],
      },
      {
        id: 2,
        name: 'product 2',
        description: 'product 2 description',
        pictureUrl:
          'https://secure.img1-fg.wfcdn.com/im/95803844/resize-h755-w755%5Ecompr-r85/2226/222679290/Arbre+%C3%A0+bonsai+pin+en+pot.jpg',
        altPicture: 'Bonsai tree in pottery again',
        price: 76.99,
        quantity: 10,
        comments: [
          {
            comment: 'This is very good',
            evaluation: 4,
          },
          {
            comment: 'This is excellent',
            evaluation: 3,
          },
        ],
      },
    ];
  }
}
