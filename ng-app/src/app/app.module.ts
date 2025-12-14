import { ApplicationRef, DoBootstrap, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { AppNgComponent } from './app.ng.component';

@NgModule({
  declarations: [AppNgComponent],
  imports: [BrowserModule, UpgradeModule],
})
export class AppModule implements DoBootstrap {
  constructor(private appRef: ApplicationRef, private upgrade: UpgradeModule) {}

  ngDoBootstrap(): void {
    // Angular を起動
    this.appRef.bootstrap(AppNgComponent);

    // AngularJS を同居起動（描画先は div#legacy-root）
    const el = document.getElementById('legacy-root');
    if (!el) throw new Error('#legacy-root not found');
    this.upgrade.bootstrap(el, ['legacyApp']);
  }
}
