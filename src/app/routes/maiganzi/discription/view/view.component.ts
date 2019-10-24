import { Component, OnInit } from '@angular/core';
import { NzModalRef, NzMessageService } from 'ng-zorro-antd';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-maiganzi-discription-view',
  templateUrl: './view.component.html',
})
export class MaiganziDiscriptionViewComponent implements OnInit {
  record: any = {};
  i: any;
  nzSpan = 1;

  constructor(
    private modal: NzModalRef,
    public msgSrv: NzMessageService,
    public http: _HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get(`/user/${this.record.id}`).subscribe(res => this.i = res);
    this.nzSpan = 3;
  }

  close() {
    this.modal.destroy();
  }
  ngChange(e) {
    console.log(e)
  }
}
