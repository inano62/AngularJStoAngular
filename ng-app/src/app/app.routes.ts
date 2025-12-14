import { Routes } from '@angular/router';
import {V2Component} from './pages/v2-component/v2-component'
import {HomeComponent} from './pages/home-component/home-component';
import {AppCompnent} from './pages/app-compnent/app-compnent';

export const routes: Routes = [
  { path: '', component :AppCompnent},
  { path: 'v2', component :V2Component},
];
