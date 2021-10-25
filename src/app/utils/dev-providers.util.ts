import {isDevMode, Provider} from "@angular/core";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {MockInterceptor} from "../interceptors/mock.interceptor";

const devProviders: Provider[] = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: MockInterceptor,
    multi: true
  }
];

export function getDevProviders(): Provider[] {
  return [...isDevMode() ? devProviders : []];
}
