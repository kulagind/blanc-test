import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {getDevProviders} from './utils/dev-providers.util';
import {HttpClientModule} from '@angular/common/http';
import {ClientsComponent} from './components/clients/clients.component';
import {ClientComponent} from './components/client/client.component';
import {RouteReuseStrategy} from "@angular/router";
import {CustomRouteReuseStrategy} from "./classes/custom-route-reuse-strategy.class";
import {TableModule} from "primeng/table";
import {CustomIfDirective} from "./directives/custom-if.directive";
import {ProgressSpinnerModule} from "primeng/progressspinner";

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    ClientComponent,
    CustomIfDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    ProgressSpinnerModule
  ],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: CustomRouteReuseStrategy
    },
    ...getDevProviders()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
