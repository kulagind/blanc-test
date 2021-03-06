import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {catchError, delay} from "rxjs/operators";
import {getMockData} from "../utils/mock.util";

@Injectable()
export class MockInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const param = req.url.split('/').pop() || '';
    if (param === 'clients' || !isNaN(+param)) {
      const matchId = param.match(/[1-9]*$/);
      const clientId = matchId ? matchId[0] : '';
      const mock = getMockData(clientId);
      if (mock) {
        return next.handle(req).pipe(
          catchError(error => {
            return of(new HttpResponse({
              body: mock,
              status: 200
            })).pipe(delay(2000)) as Observable<HttpResponse<any>>;
          })
        )
      }
    }
    return next.handle(req);
  }
}
