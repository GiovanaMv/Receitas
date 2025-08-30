import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { MenuComponent } from './pages/menu/menu';

export const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'menu', component: MenuComponent}
];
