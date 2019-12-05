import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-show-case-imgs",
  templateUrl: "./show-case-imgs.component.html",
  styleUrls: ["./show-case-imgs.component.css"]
})
export class ShowCaseImgsComponent implements OnInit {
  items: any[] = [
    {
      img: "../../../assets/images/bg_1.jpg",
      title: "Fruits"
    },
    {
      img: "",
      heading: "Vegetables",
      para: "Protect the health of every home",
      btn: "shop now"
    },
    {
      img: "../../../assets/images/category-3.jpg",
      title: "Fruits"
    },
    {
      img: "../../../assets/images/category-2.jpg",
      title: "Fruits"
    },
    {
      img: "../../../assets/images/bg_1.jpg",
      title: "Fruits"
    },
    {
      img: "../../../assets/images/category-4.jpg",
      title: "Fruits"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
