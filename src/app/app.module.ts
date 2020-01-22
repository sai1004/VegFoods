/* """""""""""""""""""""" Components """""""""""""""""""""" */

import { AppComponent } from "./app.component";
import { BannerComponent } from "./components/banner/banner.component";
import { NavComponent } from "./components/nav/nav.component";
import { FooterComponent } from "./components/footer/footer.component";
import { NewsLetterComponent } from "./components/news-letter/news-letter.component";
import { OurProductsComponent } from "./components/our-products/our-products.component";
import { DealOfTheDayComponent } from "./components/deal-of-the-day/deal-of-the-day.component";
import { TestimonialsComponent } from "./components/testimonials/testimonials.component";
import { ShowCaseComponent } from "./components/show-case/show-case.component";
import { ShowCaseImgsComponent } from "./components/show-case-imgs/show-case-imgs.component";
import { SliderComponent } from "./components/slider/slider.component";

/* """""""""""""""""""""" Pages """""""""""""""""""""" */

import { HomePageComponent } from "./pages/home-page/home-page.component";
import { SingleProductPageComponent } from "./pages/single-product-page/single-product-page.component";
import { BlogComponent } from "./pages/blog/blog.component";
import { AboutComponent } from "./pages/about/about.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { WishListComponent } from "./pages/wish-list/wish-list.component";
import { CartComponent } from "./pages/cart/cart.component";
import { CheckOutComponent } from "./pages/check-out/check-out.component";
import { ShopComponent } from "./pages/shop/shop.component";

/* """""""""""""""""""""" Modules """""""""""""""""""""" */

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "./shared/shared.module";

/* """""""""""""""""""""" Services """""""""""""""""""""" */

import { OurProductsService } from "./components/our-products/our-products.service";
import { CartService } from "./pages/cart/cart.service";

/* """""""""""""""""""""" Others """""""""""""""""""""" */

import { SliderItemDirective } from "./components/slider/slider-item.directive";
import { CameraComponent } from './components/camera/camera.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    NavComponent,
    FooterComponent,
    NewsLetterComponent,
    HomePageComponent,
    OurProductsComponent,
    DealOfTheDayComponent,
    TestimonialsComponent,
    BlogComponent,
    AboutComponent,
    ContactComponent,
    WishListComponent,
    CartComponent,
    CheckOutComponent,
    ShopComponent,
    ShowCaseComponent,
    ShowCaseImgsComponent,
    SliderComponent,
    SliderItemDirective,
    SingleProductPageComponent,
    CameraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [OurProductsService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule {}
