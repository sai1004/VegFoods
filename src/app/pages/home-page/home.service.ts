import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class HomeService {
  constructor() {}

  getShowCaseImgs() {
    return [
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
  }
}
