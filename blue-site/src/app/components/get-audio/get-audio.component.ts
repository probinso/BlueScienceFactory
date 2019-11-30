import { Component, Output, EventEmitter, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";

import { DOMAIN } from "src/app/app.constants";
import { Subscription } from "rxjs";

@Component({
  selector: "get-audio",
  templateUrl: "./get-audio.component.html"
})
export class GetAudioButton {
  private getSubscription: Subscription;
  private _bytes: Blob[] = [];
  private _blob: Blob;

  @Input() endpoint: string;
  @Input() text: string = "Retrieve";
  public disabled: boolean = false;
  @Output() audioUrl: EventEmitter<SafeUrl> = new EventEmitter();

  constructor(
    private httpClient: HttpClient,
    private sanitizer: DomSanitizer
  ) {}

  submitRequest() {
    this.disabled = true;
    const url = `${DOMAIN}/retrieve/raw/${this.endpoint}`;

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
      },
      () => {
        console.log("on complete");
        this._blob = new Blob(this._bytes, {
          type: "audio/x-wav"
        });
        const audioUrl = this.sanitizer.bypassSecurityTrustUrl(
          URL.createObjectURL(this._blob)
        );
        this.audioUrl.emit(audioUrl);
        this.getSubscription.unsubscribe();
        this.disabled = false;
      }
    );
  }
}
