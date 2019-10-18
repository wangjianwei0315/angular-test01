import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaiganziShanghaiComponent } from './shanghai/shanghai.component';
import { MaiganziFeiliuComponent } from './feiliu/feiliu.component';

const routes: Routes = [

  { path: 'shanghai', component: MaiganziShanghaiComponent },
  { path: 'feiliu', component: MaiganziFeiliuComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaiganziRoutingModule { }
