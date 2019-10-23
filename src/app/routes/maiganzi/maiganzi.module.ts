import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { MaiganziRoutingModule } from './maiganzi-routing.module';
import { MaiganziShanghaiComponent } from './shanghai/shanghai.component';
import { MaiganziShanghaiEditComponent } from './shanghai/edit/edit.component';
import { MaiganziShanghaiViewComponent } from './shanghai/view/view.component';
import { MaiganziFeiliuComponent } from './feiliu/feiliu.component';
import { MaiganziFeiliuViewComponent } from './feiliu/view/view.component';
import { MaiganziDiscriptionComponent } from './discription/discription.component';
import { MaiganziDiscriptionViewComponent } from './discription/view/view.component';
import { MaiganziDiscriptionEditComponent } from './discription/edit/edit.component';
import { MaiganziFormComponent } from './form/form.component';
import { MaiganziFormViewmComponent } from './form/viewm/viewm.component';

const COMPONENTS = [
  MaiganziShanghaiComponent,
  MaiganziFeiliuComponent,
  MaiganziDiscriptionComponent,
  MaiganziFormComponent];
const COMPONENTS_NOROUNT = [
  MaiganziShanghaiEditComponent,
  MaiganziShanghaiViewComponent,
  MaiganziFeiliuViewComponent,
  MaiganziDiscriptionViewComponent,
  MaiganziDiscriptionEditComponent,
  MaiganziFormViewmComponent];

@NgModule({
  imports: [
    SharedModule,
    MaiganziRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class MaiganziModule { }
