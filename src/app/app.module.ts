import {LOCALE_ID, NgModule} from '@angular/core';
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
import {ButtonModule} from "primeng/button";
import {registerLocaleData} from "@angular/common";
import localeRu from '@angular/common/locales/ru';
import {CurrencyComponent} from './components/currency/currency.component';
import {TableComponent} from './components/table/table.component';
import {PhoneInputComponent} from './components/phone-input/phone-input.component';
import {InputMaskModule} from "primeng/inputmask";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

registerLocaleData(localeRu);

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    ClientComponent,
    CustomIfDirective,
    CurrencyComponent,
    TableComponent,
    PhoneInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    ProgressSpinnerModule,
    ButtonModule,
    InputMaskModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "ru-RU"
    },
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
