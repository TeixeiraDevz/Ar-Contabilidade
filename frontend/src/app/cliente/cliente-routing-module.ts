import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteListComponent } from './list/cliente-list.component';
import { ClienteFormComponent } from './form/cliente-form.component';

const routes: Routes = [
  { path: '', component: ClienteListComponent },
  { path: 'novo', component: ClienteFormComponent },
  { path: 'editar/:id', component: ClienteFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
