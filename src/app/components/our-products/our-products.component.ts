import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-our-products",
  templateUrl: "./our-products.component.html",
  styleUrls: ["./our-products.component.css"]
})
export class OurProductsComponent implements OnInit {
  items: any[] = [
    {
      img: "../../../assets/images/product-1.jpg",
      price: 80,
      name: "BELL PEPPER",
      discount: 30
    },
    {
      img: "../../../assets/images/product-2.jpg",
      price: 120,
      name: "STRAWBERRY",
      discount: 30
    },
    {
      img: "../../../assets/images/product-3.jpg",
      price: 120,
      name: "GREEN BEANS",
      discount: 30
    },
    {
      img: "../../../assets/images/product-4.jpg",
      price: 120,
      name: "PURPLE CABBAGE",
      discount: 30
    },
    {
      img: "../../../assets/images/product-5.jpg",
      price: 80,
      name: "TOMATOE",
      discount: 30
    },
    {
      img: "../../../assets/images/product-6.jpg",
      price: 80,
      name: "BROCOLLI",
      discount: 30
    },
    {
      img: "../../../assets/images/product-7.jpg",
      price: 80,
      name: " CARROTS",
      discount: 30
    },
    {
      img: "../../../assets/images/product-8.jpg",
      price: 80,
      name: "FRUIT JUICE",
      discount: 30
    }
  ];

  constructor() {}

  ngOnInit() {}
}
