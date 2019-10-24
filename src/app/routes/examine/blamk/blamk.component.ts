import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd';
import { ExamineBlamkViewComponent } from './view/view.component'

@Component({
  selector: 'app-examine-blamk',
  templateUrl: './blamk.component.html',
})
export class ExamineBlamkComponent implements OnInit {
  url = `/user`;
  searchSchema: SFSchema = {
    properties: {
      callNo: {
        title: '调用次数',
        type: 'number'
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
      title: '自动化',
      buttons: [
        { text: '删除', click: item => this.del(item), type: 'del'}
      ]
    }
  ];

  constructor(private http: _HttpClient, private modal: ModalHelper, public msg: NzMessageService) { }

  ngOnInit() { }

  add() {
    this.modal
      .createStatic(ExamineBlamkViewComponent)
      .subscribe(() => this.st.reload());
  }
  del(item) {
    if (item.id) {
      this.msg.success('删除成功！')
    }
  }

}
