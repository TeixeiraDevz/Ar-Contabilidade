import { Routes } from '@angular/router';
import { Home } from './home/home/home';
import { Sobre } from './home/sobre/sobre';
import { Servicos } from './home/servicos/servicos';
import { Contato } from './home/contato/contato';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'sobre', component: Sobre },
  { path: 'servicos', component: Servicos },
  { path: 'contato', component: Contato },
];
