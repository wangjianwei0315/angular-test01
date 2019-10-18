import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';
import { ProjectPlanEditComponent } from './edit/edit.component'
import { ProjectPlanViewComponent } from './view/view.component'

@Component({
  selector: 'app-project-plan',
  templateUrl: './plan.component.html',
})
export class ProjectPlanComponent implements OnInit {
  url = `/user`;
  searchSchema: SFSchema = {
    properties: {
      no: {
        type: 'string',
        title: '编号'
      }
    }
  };
  @ViewChild('st', { static: false }) st: STComponent;
  columns: STColumn[] = [
    { title: '编号', index: 'no' },
    { title: '调用次数', type: 'number', index: 'callNo' },
    { title: '头像', type: 'img', width: '50px', index: 'avatar' },
    { title: '时间', type: 'date', index: 'updatedAt' },
    {
      title: '',
      buttons: [
        { text: '查看',type: 'static', click: (item: any) => this.view(item.id)},
        { text: '编辑', type: 'static', click: (item: any) => this.edit(item.id) },
      ]
    }
  ];

  constructor(private http: _HttpClient, private modal: ModalHelper) { }

  ngOnInit() { }

  add() {
    this.modal
      .createStatic(ProjectPlanEditComponent, { i: { id: 0 } })
      .subscribe(() => this.st.reload());
  }
  view(id:any) {
    this.modal
      .createStatic(ProjectPlanViewComponent, { i: { id } },{size:'lg'})
      .subscribe(() => this.st.reload());
  }
  edit(id:any) {
    this.modal
      .createStatic(ProjectPlanEditComponent, { i: { id } },{size:'lg'})
      .subscribe(() => this.st.reload());
  }
}
