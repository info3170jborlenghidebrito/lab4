import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  // populating the shopping cart with the list of products from the service
  shoppingCart: Product[];
  constructor(private _shoppingCartService: ShoppingCartService) {}

  ngOnInit() {
    this.shoppingCart = this._shoppingCartService.getShoppingCart();
  }
}
