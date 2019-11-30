import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomePageComponent } from "./pages/home/home-page.component";
import { AcoPageComponent } from "./pages/aco/aco-page.component";

const routes: Routes = [
  { path: "", redirectTo: "aco", pathMatch: "full" },
  { path: "home", component: HomePageComponent },
  { path: "aco", component: AcoPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
