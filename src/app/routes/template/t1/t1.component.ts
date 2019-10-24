import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';

@Component({
  selector: 'app-template-t1',
  templateUrl: './t1.component.html',
  styleUrls: ['./t1.component.less']
})
export class TemplateT1Component implements OnInit {
  data: any[] = [
    { isChecked: true, text1: '姓名001', text2: '姓名002', index:0 },
    { isChecked: true, text1: '姓名002', text2: '姓名003', index:1 },
    { isChecked: false, text1: '姓名003', text2: '姓名004', index:2 },
    { isChecked: true, text1: '姓名004', text2: '姓名005', index:3 },
  ];
  isVisible: boolean;
  delIndex: number;
  constructor(private http: _HttpClient, private modal: ModalHelper) { }

  ngOnInit() { }

  closeBox(item) {
    console.log('closed')
    this.isVisible = true;
    this.delIndex = item.index
  }
  handleOk() {
    this.isVisible = false
    this.data.map(item => {
      if (item.index > this.delIndex) item.index--
    })
    this.data.splice(this.delIndex, 1)
    console.log(this.data)
  }
  createBox(item) {
    const index = item.index
    if (index === this.data.length - 1) {
      return this.data.push({ isChecked: true, text1: '', text2: '', index: index + 1 })
    }
    this.data.map(val => {
      if (val.index >= index) val.index++
    })
    this.data.splice(index, 0, { isChecked: true, text1: '', text2: '', index })
  }

}
