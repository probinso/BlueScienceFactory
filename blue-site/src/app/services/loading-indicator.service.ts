import { Injectable } from "@angular/core";

@Injectable()
export class LoadingIndicatorService {
  private _loading: number = 0;

  get loading(): boolean {
    return this._loading !== 0;
  }

  onRequestStarted(): void {
    this._loading = this._loading + 1;
  }

  onRequestFinished(): void {
    this._loading = this._loading - 1;
  }
}
