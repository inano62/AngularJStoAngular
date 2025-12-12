import { Routes } from '@angular/router';
import {V2Component} from './pages/v2-component/v2-component'
import {HomeComponent} from './pages/home-component/home-component';

export const routes: Routes = [
  { path: '', component :HomeComponent},
  { path: 'v2', component :V2Component},
];
