import { Component, Output, EventEmitter, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";

import { DOMAIN } from "src/app/app.constants";
import { Subscription } from "rxjs";

@Component({
  selector: "request-button",
  templateUrl: "./request-button.component.html"
})
export class RequestButton {
  private getSubscription: Subscription;
  private _bytes: Blob[] = [];
  private _blob: Blob;

  @Input() endpoint: string;
  @Input() text: string = "Retrieve";
  @Input() mimeType: string;
  public disabled: boolean = false;
  @Output() audioUrl: EventEmitter<SafeUrl> = new EventEmitter();

  constructor(
    private httpClient: HttpClient,
    private sanitizer: DomSanitizer
  ) {}

  private event(url: SafeUrl, disabled: boolean) {
    if (!disabled) {
      this.getSubscription.unsubscribe();
      this._bytes = [];
    }
    this.disabled = disabled;
    this.audioUrl.emit(url);
  }

  submitRequest() {
    this.event(undefined, true);
    const url = `${DOMAIN}${this.endpoint}`;

    console.log(`calling endpoint [${this.endpoint}]`);
    const httpOptions = {
      responseType: "arraybuffer" as "blob"
    };

    this.getSubscription = this.httpClient.get(url, httpOptions).subscribe(
      response => {
        console.log("on next");
        this._bytes.push(response);
      },
      error => {
        console.log("is an error");
        console.log(error);
        this.event(undefined, false);
      },
      () => {
        console.log("on complete");
        this._blob = new Blob(this._bytes, {
          type: this.mimeType
        });
        const audioUrl = this.sanitizer.bypassSecurityTrustUrl(
          URL.createObjectURL(this._blob)
        );
        this.event(audioUrl, false);
      }
    );
  }
}
