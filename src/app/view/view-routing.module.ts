import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShowFullComponent} from './show-full/show-full.component';

const routes: Routes = [
  {path: 'show/:id', component: ShowFullComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
