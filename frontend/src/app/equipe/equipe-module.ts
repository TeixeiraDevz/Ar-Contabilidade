import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipeRoutingModule } from './equipe-routing-module';
import { EquipeListComponent } from './list/equipe-list.component';
import { EquipeFormComponent } from './form/equipe-form.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EquipeRoutingModule,
    EquipeListComponent,
    EquipeFormComponent
  ]
})
export class EquipeModule { }
