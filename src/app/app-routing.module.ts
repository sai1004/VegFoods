import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { AboutComponent } from "./pages/about/about.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { BlogComponent } from "./pages/blog/blog.component";
import { CartComponent } from "./pages/cart/cart.component";
import { CheckOutComponent } from "./pages/check-out/check-out.component";
import { ShopComponent } from "./pages/shop/shop.component";

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "blog", component: BlogComponent },
  { path: "cart", component: CartComponent },
  { path: "shop", component: ShopComponent },
  { path: "check-out", component: CheckOutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
