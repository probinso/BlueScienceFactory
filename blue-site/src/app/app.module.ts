import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { HomePageComponent } from "./pages/home/home-page.component";
import { TeamPageComponent } from "./pages/team/team-page.component";
import { AcoPageComponent } from "./pages/aco/aco-page.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LocalMaterialModule } from "./material.module";
import { NgxMaterialTimepickerModule } from "ngx-material-timepicker";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TeamPageComponent,
    AcoPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    LocalMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgxMaterialTimepickerModule
  ],
  exports: [LocalMaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
