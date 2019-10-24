import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateT1Component } from './t1/t1.component';

const routes: Routes = [

  { path: 't1', component: TemplateT1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
