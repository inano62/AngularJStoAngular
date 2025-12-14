import {ApplicationRef, CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { AppNgComponent } from './app.ng.component';
import '../legacy/index';
import {LegacyHostComponent} from './legacy-host/legacy-host.component';

@NgModule({
  declarations: [AppNgComponent],
  imports: [BrowserModule, UpgradeModule, LegacyHostComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule implements DoBootstrap {
  constructor(
    private appRef: ApplicationRef,
    private upgrade: UpgradeModule
  ) {}

  ngDoBootstrap(): void {
    this.appRef.bootstrap(AppNgComponent);

    const el = document.getElementById('legacy-root');
    if (!el) throw new Error('#legacy-root not found');
    this.upgrade.bootstrap(el, ['legacyApp'], {strictDi: true});
  }
}
