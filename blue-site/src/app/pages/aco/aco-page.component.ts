import { Component, SimpleChanges } from "@angular/core";
import { DatePipe } from "@angular/common";
import { SafeUrl } from "@angular/platform-browser";

@Component({
  selector: "aco-page",
  templateUrl: "./aco-page.component.html"
})
export class AcoPageComponent {
  public endpoint: string;
  public audioUrl: SafeUrl;
  public queryDatetime: Date;

  constructor(private datepipe: DatePipe) {}

  ngOnInit() {
    this.updateEndpoint();
    console.log(this.endpoint);
  }

  private updateEndpoint() {
    const formatdate = this.queryDatetime
      ? this.datepipe.transform(this.queryDatetime, "MM:dd:yyyy:HH:mm:ss")
      : "";
    this.endpoint = `retrieve/${formatdate}`;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.queryDatetime) {
      console.log("!!!!");
      this.updateEndpoint();
    }
  }

  setUrl(audioUrl: SafeUrl) {
    console.log(`setting url [${audioUrl}]`);
    this.audioUrl = audioUrl;
  }
}
