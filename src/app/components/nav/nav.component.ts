import { Component, OnInit } from "@angular/core";
import { CartService } from "src/app/pages/cart/cart.service";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  isCollapsed: boolean;
  cartItems: any[];

  constructor(private _cartService: CartService) {
    this.cartItems = this._cartService.showCartItems();
  }

  ngOnInit() {}

  navCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
}
