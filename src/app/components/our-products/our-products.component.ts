import { Component, OnInit } from "@angular/core";
import { Products } from "../../../app/entities/Products";
@Component({
  selector: "app-our-products",
  templateUrl: "./our-products.component.html",
  styleUrls: ["./our-products.component.css"]
})
export class OurProductsComponent implements OnInit {
  products: Products[] = [
    {
      id: "4sdfsd4",
      p_img: "../../../assets/images/product-1.jpg",
      p_price: 80,
      p_name: "BELL PEPPER",
      p_discount: 30
    },
    {
      id: "4sdfsd4",
      p_img: "../../../assets/images/product-2.jpg",
      p_price: 120,
      p_name: "STRAWBERRY",
      p_discount: 30
    },
    {
      id: "4sdfsd4",
      p_img: "../../../assets/images/product-3.jpg",
      p_price: 120,
      p_name: "GREEN BEANS",
      p_discount: 30
    },
    {
      id: "4sdfsd4",
      p_img: "../../../assets/images/product-4.jpg",
      p_price: 120,
      p_name: "PURPLE CABBAGE",
      p_discount: 30
    },
    {
      id: "4sdfsd4",
      p_img: "../../../assets/images/product-5.jpg",
      p_price: 80,
      p_name: "TOMATOE",
      p_discount: 30
    },
    {
      id: "4sdfsd4",
      p_img: "../../../assets/images/product-6.jpg",
      p_price: 80,
      p_name: "BROCOLLI",
      p_discount: 30
    },
    {
      id: "4sdfsd4",
      p_img: "../../../assets/images/product-7.jpg",
      p_price: 80,
      p_name: " CARROTS",
      p_discount: 30
    },
    {
      id: "4sdfsd4",
      p_img: "../../../assets/images/product-8.jpg",
      p_price: 80,
      p_name: "FRUIT JUICE",
      p_discount: 30
    }
  ];

  constructor() {}

  ngOnInit() {}
}
