import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let mreq=request.clone({
      // method:'post',
      // body:{product:" realme note 11"},
      // headers:new HttpHeaders(

      //   {
      //     Authorization:`Bearer {token}`
      //   }
      // )

    })
    console.log("request intercepor")
    return next.handle(mreq);
  }
}
