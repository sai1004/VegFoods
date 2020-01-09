import { Component, OnInit } from "@angular/core";
 

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.css"]
})
export class BlogComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
 

  images: any[] = [
    "../../../assets/images/product-1.jpg",
    "../../../assets/images/product-2.jpg",
    "../../../assets/images/product-3.jpg",
    "../../../assets/images/product-4.jpg",
    "../../../assets/images/product-5.jpg",
    "../../../assets/images/product-6.jpg",
    "../../../assets/images/product-7.jpg"
  ];

  num: number = 0;

  slider: string = this.images[0];

  next() {
    this.num++;
    if (this.num >= this.images.length) {
      this.num = 0;
    }

    this.slider = this.images[this.num];
  }

  previous() {
    this.num--;
    if (this.num < 0) {
      this.num = this.images.length - 1;
    }

    this.slider = this.images[this.num];
  }
}
