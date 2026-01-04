import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const apiReq = req.clone({
      withCredentials: true, // ★Cookie送受信の核
    });
    return next.handle(apiReq);
  }
}
