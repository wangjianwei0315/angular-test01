import { Component, OnInit } from '@angular/core';
import { NzModalRef, NzMessageService } from 'ng-zorro-antd';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-maiganzi-feiliu-view',
  templateUrl: './view.component.html',
})
export class MaiganziFeiliuViewComponent implements OnInit {

  constructor(
    private modal: NzModalRef,
    public msgSrv: NzMessageService,
    public http: _HttpClient
  ) { }
  nzOptions: any[] = [
    {label: 'webstate', value: '01', children: [
        { label: 'east01', value: '001', isLeaf: true},
        { label: 'east02', value: '002', isLeaf: true},
        { label: 'east03', value: '003',children: [
            { label: 'north01', value: '0004', isLeaf: true }
          ]},
      ]},
    { label: 'sorthstate', value: '02', isLeaf: true }
  ];
  values: any[] = [];
  isChecked: boolean;
  isCheckedButton: boolean;

  ngOnInit(): void {
  }

  close() {
    this.modal.destroy();
  }
  change(e:any) {
    console.log(e.el.innerText)
  }
  childClick(e:any) {
    console.log(e.target.innerText)
  }
  onChanges(e:any) {
    console.log(e)
  }
  checkCallback(e) {
    console.log(e)
  }
}
