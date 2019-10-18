import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { MaiganziRoutingModule } from './maiganzi-routing.module';
import { MaiganziShanghaiComponent } from './shanghai/shanghai.component';
import { MaiganziShanghaiEditComponent } from './shanghai/edit/edit.component';
import { MaiganziShanghaiViewComponent } from './shanghai/view/view.component';
import { MaiganziFeiliuComponent } from './feiliu/feiliu.component';
import { MaiganziFeiliuViewComponent } from './feiliu/view/view.component';

const COMPONENTS = [
  MaiganziShanghaiComponent,
  MaiganziFeiliuComponent];
const COMPONENTS_NOROUNT = [
  MaiganziShanghaiEditComponent,
  MaiganziShanghaiViewComponent,
  MaiganziFeiliuViewComponent];

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
