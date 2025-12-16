import { Routes } from '@angular/router';
import {V2Component} from './pages/v2/v2.component'
import {V3Component} from './pages/v3/v3.component';
import {LegacyHostComponent} from './pages/legacy-host/legacy-host.component';

export const routes: Routes = [
  { path: '', redirectTo: 'legacy/default', pathMatch: 'full' },
  { path: 'legacy/:mode', component: LegacyHostComponent },
  { path: 'v2', component: V2Component },
  { path: 'v3', component: V3Component },
];

