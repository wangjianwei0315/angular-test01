import { Component, OnInit } from '@angular/core';
import { NzMessageService, NzModalRef } from 'ng-zorro-antd';
import { _HttpClient } from '@delon/theme';
import { SFSchema, SFStringWidgetSchema, SFUISchema } from '@delon/form';

@Component({
  selector: 'app-examine-any-view-black',
  templateUrl: './black.component.html',
})
export class ExamineAnyViewBlackComponent implements OnInit {
  record: any = {};
  i: any;
  schema: SFSchema = {
    properties: {
      content: {
        type: 'string',
        title: '申请理由',
        ui: {
          widget: 'string',
          grid: { span: 12 },
          placeholder: '请写申请理由',
        } as SFStringWidgetSchema,
      },
    },
    required: [],
  };
  ui: SFUISchema = {
    '*': {
      spanLabelFixed: 140,
      grid: { span: 12 },
    },
  };

  constructor(
    private modal: NzModalRef,
    private msgSrv: NzMessageService,
    public http: _HttpClient,
  ) {}

  ngOnInit(): void {
  }

  save(value: any) {
    // 编辑
    this.http.post(`/supplier/applyBlack?id=${value.id}&noticeType=${value.noticeType}&content=${value.content}`).subscribe(res => {
      this.msgSrv.success('保存成功');
      this.modal.close(true);
    });
  }

  close() {
    this.modal.destroy();
  }
}
