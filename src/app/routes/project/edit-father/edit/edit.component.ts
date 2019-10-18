import { Component, OnInit, ViewChild } from '@angular/core';
import { NzModalRef, NzMessageService } from 'ng-zorro-antd';
import { _HttpClient } from '@delon/theme';
import { SFSchema, SFUISchema } from '@delon/form';

@Component({
  selector: 'app-project-edit-father-edit',
  templateUrl: './edit.component.html',
})
export class ProjectEditFatherEditComponent implements OnInit {
  record: any = {};
  i: any;
  schema: SFSchema = {
    properties: {
      email: {
        type: 'string',
        title: '邮箱',
        format: 'email',
        maxLength: 20
      },
      name: {
        type: 'string',
        title: '姓名',
        minLength: 3
      }
    },
    required: ['email', 'name']
  };

  ui: SFUISchema = {
    '*': {
      spanLabelFixed: 100,
      grid: { span: 12 },
    }
  };

  constructor(
    private modal: NzModalRef,
    private msg: NzMessageService,
    public http: _HttpClient,
  ) {}

  ngOnInit(): void {
    if (this.record.id > 0)
    this.http.get(`/user/${this.record.id}`).subscribe(res => (this.i = res));
  }

  save(value: any) {
    this.http.post(`/user/${this.record.id}`, value).subscribe(res => {
      this.msg.success('保存成功');
      this.modal.close(true);
    });
  }

  close() {
    this.modal.destroy();
  }
  formSubmit() {
    this.msg.success('保存成功name and email')
    this.close()
  }
}
