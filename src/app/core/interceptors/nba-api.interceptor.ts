import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class NbaApiInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (environment.API_KEY && environment.API_HOST) {
      request = request.clone({
        setHeaders: {
          'X-RapidAPI-Key': environment.API_KEY,
          'X-RapidAPI-Host': environment.API_HOST
        }
      })
    }

    return next.handle(request);
  }
}
