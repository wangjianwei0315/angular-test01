import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { ExamineRoutingModule } from './examine-routing.module';
import { ExamineAnyComponent } from './any/any.component';
import { ExamineAnyEditComponent } from './any/edit/edit.component';
import { ExamineAnyViewComponent } from './any/view/view.component';
import { ExamineAnyViewBlackComponent } from './any/view/black/black.component';
import { ExamineAnyViewBlackEditComponent } from './any/view/black/edit/edit.component';
import { ExamineBlamkComponent } from './blamk/blamk.component';
import { ExamineBlamkViewComponent } from './blamk/view/view.component';
import { ExamineBlamkEditComponent } from './blamk/edit/edit.component';

const COMPONENTS = [
  ExamineAnyComponent,
  ExamineBlamkComponent,
  ExamineBlamkEditComponent];
const COMPONENTS_NOROUNT = [
  ExamineAnyEditComponent,
  ExamineAnyViewComponent,
  ExamineAnyViewBlackComponent,
  ExamineAnyViewBlackEditComponent,
  ExamineBlamkViewComponent];

@NgModule({
  imports: [
    SharedModule,
    ExamineRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class ExamineModule { }
