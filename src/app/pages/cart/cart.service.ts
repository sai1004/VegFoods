import { Injectable } from "@angular/core";
import { OurProductsService } from "src/app/components/our-products/our-products.service";

@Injectable({
  providedIn: "root"
})
export class CartService {
  constructor(private _products: OurProductsService) {
    this.savedCartItems = _products.getCartItems();
  }

  savedCartItems: any[] = [];

  showCartItems() {
    return this.savedCartItems;
  }
}
