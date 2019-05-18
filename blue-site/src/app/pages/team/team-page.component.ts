import { Component } from "@angular/core";

@Component({
  selector: "team-page",
  templateUrl: "./team-page.component.html"
})
export class TeamPageComponent {
  team = [
    {
      name: "Philip",
      img:
        "https://media.licdn.com/dms/image/C5603AQFCCEr1_Ca6IQ/profile-displayphoto-shrink_200_200/0?e=1563408000&v=beta&t=itYaU8C25L6tVU2I-nOw9PMqWWQKFkmWHztejVGtpJ4"
    }
  ];
}
