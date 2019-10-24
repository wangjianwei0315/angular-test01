import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { TemplateRoutingModule } from './template-routing.module';
import { TemplateT1Component } from './t1/t1.component';
import {ElTagsModule} from 'element-angular/release/tag/module';
import { ElModule } from 'element-angular/release/element-angular.module';

const COMPONENTS = [
  TemplateT1Component];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    TemplateRoutingModule,
    ElTagsModule,
    ElModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class TemplateModule { }
