import { Component, SimpleChanges } from "@angular/core";
import { DatePipe } from "@angular/common";
import { SafeUrl } from "@angular/platform-browser";

@Component({
  selector: "aco-page",
  templateUrl: "./aco-page.component.html"
})
export class AcoPageComponent {
  public audioUrl: SafeUrl;
  public queryDatetime: Date;

  constructor(private datepipe: DatePipe) {}

  get rawendpoint(): string {
    return this.endpoint("raw");
  }

  endpoint(operation: string) {
    const datestr = this.queryDatetime
      ? this.datepipe.transform(this.queryDatetime, "MM:dd:yyyy:HH:mm:ss")
      : "";

    return `/retrieve/${operation}/${datestr}`;
  }

  setUrl(audioUrl: SafeUrl) {
    console.log(`setting url [${audioUrl}]`);
    this.audioUrl = audioUrl;
  }
}
