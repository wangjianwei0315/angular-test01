import {Component, OnInit, ViewChild} from '@angular/core';
import { NzModalRef, NzMessageService } from 'ng-zorro-antd';
import { _HttpClient } from '@delon/theme';
import { of } from 'rxjs'
import {STChange, STChangeType, STColumn, STColumnTag, STComponent} from '@delon/abc';

const r = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min)

class STchange {
}

@Component({
  selector: 'app-examine-blamk-view',
  templateUrl: './view.component.html',
})
export class ExamineBlamkViewComponent implements OnInit {
  url: any[];
  svData: [
    { index: 'Microsoft', text: 'a company who make and develop software' },
    { index: 'never', text: "something you can't see forever" },
    { index: 'facebook', text: '一个非死不可的网站' }
  ];
  TAG: STColumnTag = {
    1: { text: '成功', color: 'green' },
    2: { text: '错误', color: 'red' },
    3: { text: '进行中', color: 'blue' },
    4: { text: '默认', color: '' },
    5: { text: '警告', color: 'orange' },
  }
  columns: STColumn[] = [
    { text: '座次', type: 'no', index: 'no'},
    { text: '姓名', index: 'name' },
    { text: '年龄', index: 'age' },
    { text: '身高', index: 'height' },
    { text: '份量', index: 'weight' },
    { text: '标记', index: 'tag', type: 'tag', tag: this.TAG }
  ]
  @ViewChild('st', { static: false }) st: STComponent;
  constructor(
    private modal: NzModalRef,
    public msg: NzMessageService,
    public http: _HttpClient
  ) { }

  ngOnInit(): void {
    of(Array(100).fill({}).map((item, index) => {
      return {
        no: '20' + index,
        name: `name020${index}`,
        age: Math.ceil(Math.random() * 10),
        height: 100 + index + 'CM',
        weight: 30 + index / 2 + 'KG',
        tag: r(1, 5)
      }
    })).subscribe(res => {
      this.url = res
    })
  }

  close() {
    this.modal.destroy();
  }
}
