import { HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if ( window.sessionStorage.getItem('token')) {
      req = req.clone({setHeaders: {'Authorization': `Bearer ` + JSON.parse(window.sessionStorage.getItem('token')).access_token}});
    } else {
      req = req.clone({setHeaders: {}});
    }



    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        return event;
      })
    );
  }
}
