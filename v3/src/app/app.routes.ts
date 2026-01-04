import { Routes } from '@angular/router';
import { V2Component } from './pages/v2/v2.component';
import { V3Component } from './pages/v3/v3.component';
import { LegacyHostComponent } from './pages/legacy-host/legacy-host.component';

// v3の中のページ（あとで作る）
import { HomeComponent as V3HomeComponent } from './pages/home-component/home-component';
import { ReactHostComponent as V3ReactHostComponent } from './pages/v3/react-host/react-host.page';

export const routes: Routes = [
  { path: '', redirectTo: 'legacy/default', pathMatch: 'full' },

  { path: 'legacy/:mode', component: LegacyHostComponent },
  { path: 'v2', component: V2Component },

  // ★ v3 を親にして、配下にページをぶら下げる
  {
    path: 'v3',
    component: V3Component,
    children: [
      { path: '', pathMatch: 'full', component: V3HomeComponent },
      { path: 'react', component: V3ReactHostComponent },
      // ここに v3 の pages を増やしていく
    ],
  },
];
