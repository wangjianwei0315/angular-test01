import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectPlanComponent } from './plan/plan.component';
import { ProjectManageComponent } from './manage/manage.component';
import { ProjectEditFatherComponent } from './edit-father/edit-father.component';
import { ProjectManageSupportComponent } from './manage/support/support.component';
import { ProjectAutholizationComponent } from './autholization/autholization.component';
import { ProjectAutholizationCategoryComponent } from './autholization/category/category.component';
import { ProjectCategoryEditComponent } from './category/edit/edit.component';

const routes: Routes = [

  { path: '', component: ProjectPlanComponent },
  { path: 'manage', component: ProjectManageComponent },
  { path: 'look', component: ProjectEditFatherComponent },
  { path: 'support', component: ProjectManageSupportComponent },
  { path: 'autholization', component: ProjectAutholizationComponent },
  { path: 'category', component: ProjectAutholizationCategoryComponent },
  { path: 'plan', component: ProjectPlanComponent },
  { path: 'edit', component: ProjectCategoryEditComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule {
  constructor() {}
  add() {
    console.log(JSON.stringify(routes))
  }
}
