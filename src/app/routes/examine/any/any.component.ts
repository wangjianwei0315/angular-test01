import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import {STColumn, STComponent, STPage} from '@delon/abc';
import { ExamineAnyEditComponent } from './edit/edit.component'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-examine-any',
  templateUrl: './any.component.html',
})
export class ExamineAnyComponent implements OnInit {
  url = `/project/list`;
  data: any = [];
  pages: STPage = {
    total: '',// 分页显示多少条数据，字符串型
    show: true,// 显示分页,
    showSize: true
  };
  @ViewChild('st', { static: false }) st: STComponent;
  columns: STColumn[] = [
    { title: '编号', index: 'no' },
    { title: '供应商名称', index: 'supplyName' },
    { title: '联系电话', index: 'cellphone', type: 'tag' },
    { title: '联系人',  index: 'contacts', width: 120 },
    { title: '邮箱', index: 'email', type: 'tag' },
    { title: '所属分类', index: 'category', width: 120 },
    { title: '描述', index: 'description' },
    {
      title: '操作',
      buttons: [
        { text: '重置密码', click: (item => this.resetPsw(item)), type: 'divider'}
      ]
    }
  ];

  constructor(private http: _HttpClient, private modal: ModalHelper, public router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.http.get(this.url).subscribe(res => {
      this.data = res.data.list
    })
  }

  add() {
    this.modal
      .createStatic(ExamineAnyEditComponent, { i: { id: 0 } })
      .subscribe(() => this.st.reload());
  }
  resetPsw(item) {
    console.log(item)
    this.router.navigate(['/project/category'])
    // 接收传递的参数
    this.route.params.subscribe(res => {
      console.log(res)
    })
  }

}
