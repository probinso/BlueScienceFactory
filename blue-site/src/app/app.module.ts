import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DatePipe } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { HomePageComponent } from "./pages/home/home-page.component";
import { TeamPageComponent } from "./pages/team/team-page.component";
import { AcoPageComponent } from "./pages/aco/aco-page.component";

import { DateRangePickerComponent } from "./components/date-range-picker/date-range-picker.component";

import { LoadingIndicatorService } from "./services/loading-indicator.service";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LocalMaterialModule } from "./material.module";
import { NgxMaterialTimepickerModule } from "ngx-material-timepicker";

import { OwlDateTimeModule, OwlNativeDateTimeModule } from "ng-pick-datetime";
import { NgxAudioPlayerModule } from "ngx-audio-player";
import { TrafficInterceptorService } from "./services/traffic-interceptor.service";

import {
  FontAwesomeModule,
  FaIconLibrary
} from "@fortawesome/angular-fontawesome";
import { faCoffee, fas } from "@fortawesome/free-solid-svg-icons";

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
  providers: [
    DatePipe,
    LoadingIndicatorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TrafficInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
    library.addIcons(faCoffee);
  }
}
