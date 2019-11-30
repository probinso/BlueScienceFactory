import { Component } from "@angular/core";
import { DatePipe } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";

// import { LoadingIndicatorService } from "src/app/services/loading-indicator.service";

const DOMAIN = "http://127.0.0.1:5000";

@Component({
  selector: "aco-page",
  templateUrl: "./aco-page.component.html"
})
export class AcoPageComponent {
  private _bytes: Blob[] = [];
  private _blob: Blob;
  public audioUrl: SafeUrl;

  constructor(
    private datepipe: DatePipe,
    private httpClient: HttpClient,
    private sanitizer: DomSanitizer
  ) {}

  submitRequest(date: Date) {
    const formatdate = date
      ? this.datepipe.transform(date, "MM:dd:yyyy:HH:mm:ss")
      : "";
    const url = `${DOMAIN}/retrieve/${formatdate}`;

    console.log(`calling [${url}]`);
    const httpOptions = {
      responseType: "arraybuffer" as "blob"
    };

    this.httpClient.get(url, httpOptions).subscribe(
      response => {
        console.log("on next");
        this._bytes.push(response);
      },
      error => {
        console.log("is an error");
        console.log(error);
      },
      () => {
        console.log("on complete");
        this._blob = new Blob(this._bytes, {
          type: "audio/x-wav"
        });
        console.log(this._blob);
        this.audioUrl = this.sanitizer.bypassSecurityTrustUrl(
          URL.createObjectURL(this._blob)
        );
        console.log(this.audioUrl);
      }
    );
  }
}
