import { Routes } from '@angular/router';
import { InternalLayout } from './layout/layout-module';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home-module').then(m => m.HomeModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth-module').then(m => m.AuthModule) },
  {
    path: '',
    component: InternalLayout,
    canActivate: [authGuard],
    children: [
      { path: 'apresentacao', loadComponent: () => import('./home/sobre/sobre').then(m => m.Sobre) },
      { path: 'cliente', loadChildren: () => import('./cliente/cliente-module').then(m => m.ClienteModule) },
      { path: 'equipe', loadChildren: () => import('./equipe/equipe-module').then(m => m.EquipeModule) },
      // aqui estão outras rotas internas
    ]
  },
];
 