import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectPlanComponent } from './plan/plan.component';
import { ProjectPlanEditComponent } from './plan/edit/edit.component';
import { ProjectPlanViewComponent } from './plan/view/view.component';
import { ProjectManageComponent } from './manage/manage.component';
import { ProjectManageEditComponent } from './manage/edit/edit.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { ProjectManageAdminComponent } from './manage/admin/admin.component';
import { ProjectEditFatherComponent } from './edit-father/edit-father.component';
import { ProjectEditFatherEditComponent } from './edit-father/edit/edit.component';
import { ProjectEditFatherViewComponent } from './edit-father/view/view.component';
import { ProjectEidtFatherLookComponent } from './edit-father/look/look.component';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { ProjectManageSupportComponent } from './manage/support/support.component';
import { ProjectSupportEditComponent } from './support/edit/edit.component';
import { ProjectSupportViewComponent } from './support/view/view.component';
import { ProjectAutholizationComponent } from './autholization/autholization.component';
import { ProjectAutholizationCategoryComponent } from './autholization/category/category.component';
import { ProjectCategoryEditComponent } from './category/edit/edit.component';
import { ProjectAutholizationCategoryEditComponent } from './autholization/category/edit/edit.component';

const COMPONENTS = [
  ProjectPlanComponent,
  ProjectManageComponent,
  ProjectEditFatherComponent,
  ProjectManageSupportComponent,
  ProjectAutholizationComponent,
  ProjectAutholizationCategoryComponent,
  ProjectCategoryEditComponent];
const COMPONENTS_NOROUNT = [
  ProjectPlanEditComponent,
  ProjectPlanViewComponent,
  ProjectManageEditComponent,
  ProjectManageAdminComponent,
  ProjectEditFatherEditComponent,
  ProjectEditFatherViewComponent,
  ProjectEidtFatherLookComponent,
  ProjectSupportEditComponent,
  ProjectSupportViewComponent,
  ProjectAutholizationCategoryEditComponent];

@NgModule({
  imports: [
    SharedModule,
    ProjectRoutingModule,
    NzModalModule,
    NzTreeSelectModule,
    NzGridModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class ProjectModule { }
