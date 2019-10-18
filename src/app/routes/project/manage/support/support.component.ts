import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';
import { ProjectSupportEditComponent } from '../../support/edit/edit.component'
import { NzMessageService } from 'ng-zorro-antd'

@Component({
  selector: 'app-project-manage-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.less']
})
export class ProjectManageSupportComponent implements OnInit {
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
      title: '操作',
      buttons: [
        { text: '查看', click: (item: any) => `/form/${item.id}` },
      ]
    }
  ];

  constructor(private http: _HttpClient, private modal: ModalHelper, public msg: NzMessageService) { }

  ngOnInit() { }

  add() {
    this.modal
      .createStatic(ProjectSupportEditComponent, { i: { id: 0 } })
      .subscribe(() => this.st.reload());
    this.msg.success('NzMessageService')
  }

}
