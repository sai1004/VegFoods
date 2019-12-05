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
      img: "../../../assets/images/product-1.jpg",
      price: 80,
      name: "BELL PEPPER",
      discount: 30
    },
    {
      img: "../../../assets/images/product-1.jpg",
      price: 80,
      name: "BELL PEPPER",
      discount: 30
    },
    {
      img: "../../../assets/images/product-1.jpg",
      price: 80,
      name: "BELL PEPPER",
      discount: 30
    },
    {
      img: "../../../assets/images/product-1.jpg",
      price: 80,
      name: "BELL PEPPER",
      discount: 30
    },
    {
      img: "../../../assets/images/product-1.jpg",
      price: 80,
      name: "BELL PEPPER",
      discount: 30
    },
    {
      img: "../../../assets/images/product-1.jpg",
      price: 80,
      name: "BELL PEPPER",
      discount: 30
    },
    {
      img: "../../../assets/images/product-1.jpg",
      price: 80,
      name: "BELL PEPPER",
      discount: 30
    }
  ];

  constructor() {}

  ngOnInit() {}
}
