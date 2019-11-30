import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent
} from "@angular/common/http";

import { LoadingIndicatorService } from "./loading-indicator.service";

@Injectable()
export class TrafficInterceptorService implements HttpInterceptor {
  constructor(private loadingIndicator: LoadingIndicatorService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const result = next.handle(req);
    return result;
  }
}
