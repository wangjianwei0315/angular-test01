import { Component, OnInit, ViewChild, EventEmitter, Input, Output } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd';
import * as Http from 'http';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-template-t1',
  templateUrl: './t1.component.html',
  styleUrls: ['./t1.component.less']
})
export class TemplateT1Component implements OnInit {
  data: any[] = [
    { id: 0, children: [
        { isChecked: true, post: '大唐天子', person: '张飞', index:0, canEdit: true },
        { isChecked: true, post: '', person: '张飞', index:1, canEdit: false },
        { isChecked: true, post: '', person: '张飞', index:2, canEdit: true },
        { isChecked: true, post: '大唐天子', person: '', index:3, canEdit: true },
      ]},
    { id:1, children: [
        { isChecked: true, post: '瓦岗第一霸', person: '板三', index:0, canEdit: false },
        { isChecked: true, post: '', person: '张三', index:1, canEdit: true },
      ]},
    { id: 2, children: [
        { isChecked: true, post: '白领', person: '李白', index:0, canEdit: false },
        { isChecked: true, post: '圣人', person: '孔子', index:1, canEdit: false },
        { isChecked: true, post: '英雄', person: '岳飞', index:2, canEdit: true }
      ]},
    { id: 3}
  ];
  element: any;
  isVisible = false;
  isVisible01 = false;
  nameText = '';
  editPoint: any;

  constructor(private tt: HttpClient, private http: _HttpClient, private modal: ModalHelper, public msg: NzMessageService) { }

  ngOnInit() {
    this.data.map(item => {
      if (!item.children) item.children = []
    })
  }

  handleOk() {
    const { item, val } = this.element
    const index = val.index
    item.children.map(i => {
      if (i.index >= index) i.index--
    })
    item.children.splice(index, 1)
    this.msg.info('删除成功')
    this.isVisible = false;
    console.log(this.data)
    this.data.map((i, num) => {
      if(!i.children.length) {
        this.data.splice(num, 1)
      }
    })
  }
  // 开始 右侧的新增
  startCreate() {
    this.data.unshift({
      id:Math.random(),
      children: [
        { isChecked: Boolean, post: '', person: '', index:0 }
      ]
    })
  }
  // 横向新增
  createBox(item) {
    const index = this.data.findIndex(val => val.id === item.id)
    this.data.splice(index + 1, 0, { id: Math.random(), children: [{ isChecked: Boolean, post: '', person: '', index: 0, canEdit: true }]})
  }
  // 纵向新增
  createY(item, val) {
    const child = item.children
    child.map(i => {
      if (i.index >= val.index) i.index++
    })
    child.splice(val.index, 0, { isChecked: Boolean, post: '', person: '', index: val.index, canEdit: true })
    console.log(child)
  }
  // 删除
  del(item, val) {
    this.isVisible = true;
    this.element = { item, val }
  }
  edit(item, value) {
    this.isVisible01 = true;
    this.nameText = value;
    this.editPoint = item
  }
  handle01() {
    this.isVisible01 = false;
    this.editPoint.post = this.nameText
  }
}
