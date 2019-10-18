import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';
import { ProjectEidtFatherLookComponent } from './look/look.component'
import { ProjectEditFatherEditComponent } from './edit/edit.component'
import { ProjectEditFatherViewComponent } from './view/view.component'
@Component({
  selector: 'app-project-edit-father',
  templateUrl: './edit-father.component.html',
  styleUrls: ['./edit-father.component.less']
})
export class ProjectEditFatherComponent implements OnInit {
  url: any[] = [];
  searchSchema: SFSchema = {
    properties: {
      no: {
        type: 'string',
        title: '项目编号'
      },
      callNo: {
        type: 'number',
        title: '投资金额'
      }
    }
  };
  @ViewChild('st', { static: false }) st: STComponent;
  columns: STColumn[] = [
    { title: '项目编号', index: 'no' },
    { title: '投标金额', type: 'tag', index: 'callNo' },
    { title: '招标时间', type: 'date', index: 'avatar' },
    { title: '施工人数', type: 'tag', index: 'updatedAt' },
    { title: '施工面积', type: 'tag', index: 'buildArea' },
    { title: '施工图', type: 'img', index: 'buildImg', width: '60px', height: '60px' },
    { title: '项目审批人', type: 'tag', index: 'tagPerson' },
    {
      title: '操作',
      buttons: [
        { text: '查看', click: (item => this.preview(item)), component: ProjectEditFatherViewComponent, },
        { text: '编辑', type: 'static', component: ProjectEditFatherEditComponent, click: 'reload' },
      ]
    }
  ];

  constructor(private http: _HttpClient, private modal: ModalHelper) { }

  ngOnInit() {
    this.http.get('/user').subscribe(res => {
      console.log(res)
      let total = res.total + 1500
      const imgs = ['./assets/images/remind.jpg', './assets/images/remind.png']
      const arr = []
      for (; total >0; total--) {
        arr.push({
          no: `00${total}`,
          callNo: `${total}00,0000,3800,88${total}(亿)`,
          avatar: '2019-8-18 08:00',
          updatedAt: total + 150,
          // buildImg: imgs[total % 2],
          buildImg: `./assets/tmp/img/bg${total % 10}.jpg`,
          buildArea: total + 2500,
          tagPerson: '法外之域'
        })
      }
      this.url = arr
    })
    this.http.get('/user/current').subscribe(res => {
      console.log(res)
    })
  }

  add() {
    this.modal
      .createStatic(ProjectEidtFatherLookComponent, { i: { id: 0 } })
      .subscribe(() => this.st.reload());
  }
  preview(item) {
    this.modal
      .createStatic(ProjectEditFatherViewComponent, { i: { id: 0 } })
      .subscribe(() => this.st.reload());
    console.log(item ? item: 'item is not find')
  }
}
