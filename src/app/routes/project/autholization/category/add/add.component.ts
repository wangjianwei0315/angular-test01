import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent, STPage } from '@delon/abc';
import { ProjectAutholizationCategoryEditComponent } from '../edit/edit.component';
import { Router } from '@angular/router'

@Component({
  selector: 'app-project-autholization-category-add',
  templateUrl: './add.component.html',
})
export class ProjectAutholizationCategoryAddComponent implements OnInit {
  selectIndex = 0;
  tabs: any[] = [
    {
      key: 'project/category',
      title: '列表',
      value: 'category'
    }
  ];

  @Input() id=0;
  // tslint:disable-next-line:no-output-native
  @Output() submit= new EventEmitter();
  selectData: any = [];
  tenderCutStatus:boolean;
  tenderStatus:string;
  pages: STPage = {
    total: '',// 分页显示多少条数据，字符串型
    show: false,// 显示分页
  };

  @ViewChild('st', { static: false }) st: STComponent;
  columns: STColumn[] = [
    { title: '序号', type: 'no' },
    { title: '供应商名称', index: 'name' },
    { title: '联系人', index: 'contact' },
    { title: '联系电话', index: 'mobile' },
    { title: '保证金', index: 'marginStatusStr' },
    { title: '投标状态', index: 'bidStatusStr' },
    { title: '投标时间', index: 'bidTime' },
    { title: '操作IP', index: 'operationIp' },
  ];

  constructor(private http: _HttpClient,
              private modal: ModalHelper,
              public router: Router
  ) { }

  ngOnInit() {
    this.findById();
  }


  findById(){
    this.http.get(`/openBidding/findQualificationEvaluation`,{id: this.id,backCondition:'success'}).subscribe(res => {
      this.selectData=res.tenderSupplierList;
      this.tenderCutStatus=res.tenderCutStatus;
      this.tenderStatus=res.openBiddingStatus;
    });
  }


  add() {
    this.modal
      .createStatic(ProjectAutholizationCategoryEditComponent, { i: { id: 0 } },{size:'xl'})
      .subscribe((res) => {
        const item = res;
        const data = [];
        const saveData=[];
        for (const obj of this.st._data){
          data.push(obj);
        }
        for(const obj of item) {
          const ret2 = data.findIndex((v) => {
            return v.supplierId === obj.supplierId;
          });
          if (ret2===-1){
            data.push(obj);
            saveData.push(obj);
          }
        }

        if (saveData.length !== 0) {
          this.http.post(`/tenderSupplier/addSupplier`,{id: this.id,json:JSON.stringify(saveData)}).subscribe(res => {
            this.findById()
          });
        }
      });
  }
  tabTo(tab) {
    this.router.navigateByUrl(`/project/${tab.key}?status=${tab.status}`);
    // this.router.navigateByUrl('/supplier/supplier-list/supplier-page',{ queryParams: { page: 1 } });
    // this.router.navigate(['./examine/any'])
  }

}
