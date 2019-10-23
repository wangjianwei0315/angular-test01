import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaiganziShanghaiComponent } from './shanghai/shanghai.component';
import { MaiganziFeiliuComponent } from './feiliu/feiliu.component';
import { MaiganziDiscriptionComponent } from './discription/discription.component';
import { MaiganziFormComponent } from './form/form.component';

const routes: Routes = [

  { path: 'shanghai', component: MaiganziShanghaiComponent },
  { path: 'feiliu', component: MaiganziFeiliuComponent },
  { path: 'discription', component: MaiganziDiscriptionComponent },
  { path: 'form', component: MaiganziFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaiganziRoutingModule { }
