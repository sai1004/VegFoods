import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class OurProductsService {
  constructor() {}
  cartItems: any[] = [];

  getproducts() {
    return [
      {
        id: "4sdfsd4",
        img: "../../../assets/images/product-1.jpg",
        price: 80,
        name: "BELL PEPPER",
        discount: 30,
        isStock: 2
      },
      {
        id: "4sdfsd4",
        img: "../../../assets/images/product-2.jpg",
        price: 120,
        name: "STRAWBERRY",
        discount: 30,
        isStock: 2
      },
      {
        id: "4sdfsd4",
        img: "../../../assets/images/product-3.jpg",
        price: 120,
        name: "GREEN BEANS",
        discount: 30,
        isStock: 2
      },
      {
        id: "4sdfsd4",
        img: "../../../assets/images/product-4.jpg",
        price: 120,
        name: "PURPLE CABBAGE",
        discount: 30,
        isStock: 2
      },
      {
        id: "4sdfsd4",
        img: "../../../assets/images/product-5.jpg",
        price: 80,
        name: "TOMATOE",
        discount: 30,
        isStock: 2
      },
      {
        id: "4sdfsd4",
        img: "../../../assets/images/product-6.jpg",
        price: 80,
        name: "BROCOLLI",
        discount: 30,
        isStock: 2
      },
      {
        id: "4sdfsd4",
        img: "../../../assets/images/product-7.jpg",
        price: 80,
        name: " CARROTS",
        discount: 30,
        isStock: 2
      },
      {
        id: "4sdfsd4",
        img: "../../../assets/images/product-8.jpg",
        price: 80,
        name: "FRUIT JUICE",
        discount: 30,
        isStock: 2
      }
    ];
  }

  getCartItems() {
    return this.cartItems;
  }

  saveToCart(itemFromProduct: any) {
    console.log(itemFromProduct);
    this.cartItems.push(itemFromProduct);
  }
}
