import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DatePipe } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { HomePageComponent } from "./pages/home/home-page.component";
import { TeamPageComponent } from "./pages/team/team-page.component";
import { AcoPageComponent } from "./pages/aco/aco-page.component";

import { DateRangePickerComponent } from "./components/date-range-picker/date-range-picker.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LocalMaterialModule } from "./material.module";
import { NgxMaterialTimepickerModule } from "ngx-material-timepicker";

import { OwlDateTimeModule, OwlNativeDateTimeModule } from "ng-pick-datetime";
import { NgxAudioPlayerModule } from "ngx-audio-player";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TeamPageComponent,
    AcoPageComponent,
    DateRangePickerComponent
  ],
  imports: [
    BrowserModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    LocalMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgxMaterialTimepickerModule,
    HttpClientModule,
    NgxAudioPlayerModule
  ],
  exports: [LocalMaterialModule],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
