import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { HomePageComponent } from "./pages/home/home-page.component";
import { TeamPageComponent } from "./pages/team/team-page.component";

@NgModule({
  declarations: [AppComponent, HomePageComponent, TeamPageComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
