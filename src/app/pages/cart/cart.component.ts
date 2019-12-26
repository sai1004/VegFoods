import { Component, OnInit } from "@angular/core";
import { CartService } from "./cart.service";
 

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  cartItems: any[];
  constructor(private _cartService: CartService) {
    this.cartItems = this._cartService.showCartItems();
  }

  ngOnInit() {}
}
