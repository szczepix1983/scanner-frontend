import {enableProdMode, importProvidersFrom} from '@angular/core';

import { environment } from './environments/environment';
import {bootstrapApplication} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import {RouterModule} from '@angular/router';
import {routes} from './app/app-routing.module';
import {ApiModule as ApiBackendModule} from './app/generic/api.module';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
      importProvidersFrom([
          HttpClientModule,
          BrowserAnimationsModule,
          RouterModule.forRoot(routes),
          ApiBackendModule.forRoot({rootUrl: environment.apiBackend})
      ])
  ]
})
  .catch(err => console.error(err));
