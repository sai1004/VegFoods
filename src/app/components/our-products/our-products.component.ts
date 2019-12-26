import { Component, OnInit } from "@angular/core";
import { Products } from "../../../app/entities/Products";
import { OurProductsService } from "./our-products.service";
import { CartService } from "src/app/pages/cart/cart.service";
@Component({
  selector: "app-our-products",
  templateUrl: "./our-products.component.html",
  styleUrls: ["./our-products.component.css"]
})
export class OurProductsComponent implements OnInit {
  products: Products[];

  constructor(
    private _productsService: OurProductsService,
    private _cartService: CartService
  ) {
    this.products = this._productsService.getproducts();
  }

  ngOnInit() {}

  addToCart(item) {
    this._productsService.saveToCart(item);
  }
}
