import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { MaterialModule } from "./material.module";
import { FlexLayoutModule } from "@angular/flex-layout";

import { LayoutModule } from "@angular/cdk/layout";

@NgModule({
  imports: [FlexLayoutModule, FormsModule, MaterialModule, LayoutModule],

  declarations: [],

  exports: [FormsModule, FlexLayoutModule, MaterialModule, LayoutModule],

  providers: []
})
export class SharedModule {}
