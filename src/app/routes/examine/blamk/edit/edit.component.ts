import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import {NzModalRef, NzMessageService, NzModalService} from 'ng-zorro-antd';
import {SFSchema, SFStringWidgetSchema, SFUISchema} from '@delon/form';
import {STColumn} from '@delon/abc';

@Component({
  selector: 'app-examine-blamk-edit',
  templateUrl: './edit.component.html'
})

export class ExamineBlamkEditComponent implements OnInit {
  schema: SFSchema = {
    properties: {
      name: {
        title: '模板名称',
        type: 'string',
        ui: {
          widget: 'string',
          grid: { span: 12 }
        } as SFStringWidgetSchema
      },
      useUnit: {
        type: 'string',
        title: '使用单位'
      },
      duckType: {
        type: 'string',
        title: '鸭子类型'
      },
      enum: {
        title: '枚举',
        type: 'string'
      },
      example: {
        title: '实例',
        type: 'string'
      }
    },
    required: ['name', 'duckType']
  };
  columns: STColumn[] = [
    { title: 'unify', index: 'useUnit'},
    { title: 'duck', index: 'duckType'},
    { title: 'enum', index: 'enum'},
    { title: 'example', index: 'example'},
    { title: '作孽', buttons: [
        {text: '删除', click: item => this.delete(item), type: 'del'},
        { text: '编辑', click: item => this.review(item), type: 'link'}
      ]}
  ]
  formdata: any;
  ui: SFUISchema = {
    '*': {
      spanLabelFixed: 140,
      grid: { span: 12 }
    }
  };
  constructor(private http: _HttpClient, private modal: NzModalRef, public msg: NzMessageService, public modalService: NzModalService) { }
  ngOnInit() { }
  close() {
    this.modal.destroy()
  }
  save() {
    this.modalService.confirm({
      nzTitle: '确定要保存本次修改么？',
      nzContent: '点击确认后将保存本次修改的内容！',
      nzOnOk: () => new Promise((resolve, reject) => {
        // 一系列操作。。。
      }).catch(() => this.msg.info('你已取消该操作！'))
    })
  }
  delete(item) {
    if (item.id === 4) {
      this.msg.warning('此数据不可删除！')
    }
  }
  review(item) {}

}

