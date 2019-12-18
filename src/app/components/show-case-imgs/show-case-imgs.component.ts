import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-show-case-imgs",
  templateUrl: "./show-case-imgs.component.html",
  styleUrls: ["./show-case-imgs.component.css"]
})
export class ShowCaseImgsComponent implements OnInit {
  @Input()
  items;


  constructor() {}

  ngOnInit() {}
}
