import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';
import { ProjectManageEditComponent } from './edit/edit.component'
import { NzMessageService } from 'ng-zorro-antd';
import { ProjectManageAdminComponent } from './admin/admin.component'

@Component({
  selector: 'app-project-manage',
  templateUrl: './manage.component.html',
})
export class ProjectManageComponent implements OnInit {
  url = `/user`;
  id: any;
  isVisible = false;
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
        { text: '查看', type: 'static', component: ProjectManageAdminComponent, click: (item => this.viewFile(item)) },
        { text: '编辑', type: 'static', component: ProjectManageEditComponent, click: (item => this.constItem(item)) },
        { text: '删除', type: 'static', click: (item => this.delete(item)) }
      ]
    }
  ];

  constructor(private http: _HttpClient, private modal: ModalHelper, public msg: NzMessageService) { }

  ngOnInit() { }

  add() {
    this.modal
      .createStatic(ProjectManageEditComponent, { i: { id: 0 } })
      .subscribe(() => this.st.reload());
  }
  delete(item) {
    this.isVisible = true
    this.id = item.id
  }
  eidtFile(item) {
    this.http.post('/')
  }
  handleCancel() {
    this.isVisible = false
  }
  handleOk() {
    this.isVisible = false
    this.msg.warning('删除成功！')
  }
  viewFile(item) {
    this.http.get('/user/current').subscribe(res => {
      console.log(res)
      this.msg.success(`<span style="color: #93cc06;">${res.signature}</span>`)
      console.log(`
      zaitemmedadianhuanongsiniyade
      jingjibayitianpianrenXXXXsi
      `)
    })
  }
  constItem(item) {
    //
  }

}
