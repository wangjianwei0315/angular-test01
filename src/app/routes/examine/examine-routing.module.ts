import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamineAnyComponent } from './any/any.component';
import { ExamineAnyViewComponent } from './any/view/view.component';
import { ExamineBlamkComponent } from './blamk/blamk.component';
import { ExamineBlamkEditComponent } from './blamk/edit/edit.component'

const routes: Routes = [
  { path: 'any', component: ExamineAnyComponent, children: [
      { path: 'black', component: ExamineAnyViewComponent }
    ] }
  ,
  { path: 'blamk', component: ExamineBlamkComponent },
  { path: 'edit', component: ExamineBlamkEditComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamineRoutingModule { }
