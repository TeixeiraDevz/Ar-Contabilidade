import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipeListComponent } from './list/equipe-list.component';
import { EquipeFormComponent } from './form/equipe-form.component';

const routes: Routes = [
  { path: '', component: EquipeListComponent },
  { path: 'novo', component: EquipeFormComponent },
  { path: 'editar/:id', component: EquipeFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipeRoutingModule { }
