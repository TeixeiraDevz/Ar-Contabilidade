import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home-module').then(m => m.HomeModule) },
  { path: 'cliente', loadChildren: () => import('./cliente/cliente-module').then(m => m.ClienteModule) },
  { path: 'equipe', loadChildren: () => import('./equipe/equipe-module').then(m => m.EquipeModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth-module').then(m => m.AuthModule) },
];
 