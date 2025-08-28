import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing-module';
import { Home } from './home/home';
import { Sobre } from './sobre/sobre';
import { Servicos } from './servicos/servicos';
import { Contato } from './contato/contato';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
    Home,
    Sobre,
    Servicos,
    Contato
  ]
})
export class HomeModule { }
