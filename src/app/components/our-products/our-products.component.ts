import { Component, OnInit } from "@angular/core";
import { Products } from "../../../app/entities/Products";
import { OurProductsService } from "./our-products.service";
@Component({
  selector: "app-our-products",
  templateUrl: "./our-products.component.html",
  styleUrls: ["./our-products.component.css"]
})
export class OurProductsComponent implements OnInit {
  products: Products[];

  constructor(private _productsService: OurProductsService) {
    this.products = this._productsService.getproducts();
  }

  ngOnInit() {}

  addToCart() {}
}
