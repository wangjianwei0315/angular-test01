import { Component, OnInit } from '@angular/core';
import { NzModalRef, NzMessageService } from 'ng-zorro-antd';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-project-plan-view',
  templateUrl: './view.component.html',
})
export class ProjectPlanViewComponent implements OnInit {
  record: any = {};
  i: any;

  constructor(
    private modal: NzModalRef,
    public msg: NzMessageService,
    public http: _HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get(`/user/${this.record.id}`).subscribe(res => this.i = res || null);
  }

  close() {
    this.modal.destroy();
  }
}
