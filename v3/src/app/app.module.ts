import {ApplicationRef, CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { AppNgComponent } from './app.ng.component';
import '../legacy/index';
import {LegacyHostComponent} from './pages/legacy-host/legacy-host.component';
import {routes} from './app.routes';
import {RouterModule} from '@angular/router';
import {V3Component} from './pages/v3/v3.component';
import {V2Component} from './pages/v2/v2.component';

@NgModule({
  declarations: [
    AppNgComponent,
    LegacyHostComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    UpgradeModule,
    V2Component,
    V3Component,
  ],
})
export class AppModule implements DoBootstrap {
  constructor(private appRef: ApplicationRef) {}

  ngDoBootstrap(): void {
    this.appRef.bootstrap(AppNgComponent);
  }
}

