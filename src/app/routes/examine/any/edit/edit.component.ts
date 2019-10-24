import { Component, OnInit, ViewChild } from '@angular/core';
import { NzModalRef, NzMessageService } from 'ng-zorro-antd';
import { _HttpClient } from '@delon/theme';
import { SFSchema, SFUISchema } from '@delon/form';
import { NavigationExtras, Router } from '@angular/router';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-examine-any-edit',
  templateUrl: './edit.component.html',
})
export class ExamineAnyEditComponent implements OnInit {
  record: any = {};
  i: any;
  user: any[] = [];
  schema: SFSchema = {
    properties: {
      no: { type: 'string', title: '文件编码' },
      owner: { type: 'string', title: '姓名', maxLength: 80 },
      callNo: { type: 'number', title: '调用次数' },
      href: { type: 'string', title: '文档链接', format: 'uri' },
      description: { type: 'string', title: '描述语', maxLength: 140 },
    },
    required: ['owner', 'callNo', 'href', 'description'],
  };
  ui: SFUISchema = {
    '*': {
      spanLabelFixed: 100,
      grid: { span: 12 },
    },
    $no: {
      widget: 'string'
    },
    $href: {
      widget: 'string',
    },
    $description: {
      widget: 'textarea',
      grid: { span: 24 },
    },
  };

  constructor(
    private modal: NzModalRef,
    private msgSrv: NzMessageService,
    public http: _HttpClient,
    public router:Router
  ) {}

  ngOnInit(): void {
    if (this.record.id > 0)
    this.http.get(`/user/${this.record.id}`).subscribe(res => (this.i = res));
    of(Array(100).fill({}).map((item, index) => {
      return {
        name: `name ${index + 1}`,
        id: index,
        index: `function${index}`,
        age: Math.floor(Math.random() * 10) + 18,
        status: Math.ceil(Math.random() * 100) + 5
      }
    })).pipe(delay(500)).subscribe(res => this.user = res)
  }

  save(value: any) {
    this.http.post(`/user/${this.record.id}`, value).subscribe(res => {
      this.msgSrv.success('保存成功');
      this.modal.close(true);
    });
  }

  close() {
    this.modal.destroy();
    const navigationExtras:NavigationExtras = {
      queryParams: {
        id: 1,
        name: 'username'
      },
      fragment: 'anchor'
    }
    this.router.navigate(['/project/plan'], navigationExtras)
  }
}
