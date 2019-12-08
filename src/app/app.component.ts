import { Component, ViewEncapsulation } from '@angular/core';
import * as AOS from "aos";
import 'aos/dist/aos.css';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None

})
export class AppComponent {
  title = 'VegFoods';
  isShowHeadActive: boolean;
  ngOnInit() {
      AOS.init();
  }
  constructor(private router: Router) { }
  onDeactivate() {
    // document.body.scrollTop = 0;
    // Alternatively, you can scroll to top by using this other call:
    window.scrollTo(0, 0)
}
}
