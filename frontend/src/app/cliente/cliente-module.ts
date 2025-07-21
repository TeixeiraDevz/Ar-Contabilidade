import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteRoutingModule } from './cliente-routing-module';
import { ClienteListComponent } from './list/cliente-list.component';
import { ClienteFormComponent } from './form/cliente-form.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    ClienteRoutingModule,
    ClienteListComponent,
    ClienteFormComponent
  ]
})
export class ClienteModule { }
