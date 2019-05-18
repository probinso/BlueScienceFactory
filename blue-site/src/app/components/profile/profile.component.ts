import { Component, Input } from "@angular/core";

@Component({
  selector: "profile",
  templateUrl: "./profile.component.html"
})
export class ProfileComponent {
  @Input() person: any;

  constructor() {}
}
