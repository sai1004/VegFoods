import { Component, OnInit } from "@angular/core";
import { HomeService } from "./home.service";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"]
})
export class HomePageComponent implements OnInit {
  showCaseImgs: any[];

  constructor(private _homeService: HomeService) {
    this.showCaseImgs = _homeService.getShowCaseImgs();
  }

  ngOnInit() {}
}
