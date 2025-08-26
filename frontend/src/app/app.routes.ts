import { Routes } from '@angular/router';
import { InternalLayout } from './layout/layout-module';

export const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home-module').then(m => m.HomeModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth-module').then(m => m.AuthModule) },
  {
    path: '',
    component: InternalLayout,
    children: [
      { path: 'apresentacao', loadComponent: () => import('./home/sobre/sobre').then(m => m.Sobre) },
      { path: 'cliente', loadChildren: () => import('./cliente/cliente-module').then(m => m.ClienteModule) },
      // rota 'equipe' removida conforme escopo atual
      // aqui estão outras rotas internas
    ]
  },
];
 