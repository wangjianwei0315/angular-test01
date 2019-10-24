import {Component, OnInit, ViewChild} from '@angular/core';
import { NzModalRef, NzMessageService, NzTreeNode } from 'ng-zorro-antd';
import { _HttpClient } from '@delon/theme';
import {SFSchema, SFSelectWidgetSchema} from '@delon/form';
import {STColumn, STComponent} from '@delon/abc';
// import { ExamineAnyViewBlackComponent } from './black/black.component'

@Component({
  selector: 'app-examine-any-view',
  templateUrl: './view.component.html',
})
export class ExamineAnyViewComponent implements OnInit {
  supplierType: NzTreeNode[] = [];
  supplierStatus="";
  auditStatus="wait";
  basicInfoStatus="audit";
  url1 = `/supplier/list`;
  selectItem:NzTreeNode = null;
  radioData:any=null;

  url:string=this.url1;

  searchSchema: SFSchema={
    properties: {
      name: {
        type: 'string',
        title: '',
        ui:{
          placeholder:'供应商名称'
        }
      },
      status: {
        type: 'string',
        title: '',
        enum: [
          { label: '全部', value: '' },
          { label: '待审供应商', value: 'audit' },
          { label: '试用供应商', value: 'trial' },
          { label: '合格供应商', value: 'qualified' },
          { label: '黑名单', value: 'blacklist' },
        ],
        // tslint:disable-next-line:no-object-literal-type-assertion
        ui: {
          width:200,
          placeholder:'供应商库',
          widget: 'select',
        } as SFSelectWidgetSchema
      },
      contact: {
        type: 'string',
        title: '',
        ui:{
          placeholder:'联系人'
        }
      }
    }
  };
  columns:STColumn[] = [
    { title: '编号', type: 'no' },
    { title: '供应商名称', index: 'name' },
    { title: '供应商库',index: 'statusStr' },
    { title: '联系人',index: 'contact' },
    { title: '联系方式',index: 'mobile' },
    { title: '统一信用代码/组织机构代码',index: 'companyNo' },
    { title: '注册资本（万元）',index: 'updatedAt' },
    { title: '地址',index: 'updatedAt' },
    { title: '提交时间',index: 'createTimeStr' },
    {
      title: '操作',
      buttons: [
        { text: '查看', click: (item: any) => this.viewDetail(item.id) }
      ]
    }
  ];

  @ViewChild('st', { static: false }) st: STComponent;
  constructor(
    private modal: NzModalRef,
    public msg: NzMessageService,
    public http: _HttpClient
  ) { }

  ngOnInit(): void {
  }
  public formReset(e:any){
    this.st.reset(e)
  }
  public formSearch(e:any){
    if (this.selectItem == null){
      this.st.reload(e)
    }else{
      this.st.reload({supplierTypeId:this.selectItem.key,...e})
    }
  };

  close() {
    this.modal.destroy();
  }
  setUserSupplier(e): void{
  }
  removeBlack(id:any) {
  }
  viewDetail(id:number) {
    let data={};
    this.http.get(`/supplier/findById?id=`+id).subscribe(res => {
      data={
        name:res.name,
        companyNo:res.companyNo,
        registeredCapital:res.extInfo.registeredCapital,
        currencyType:res.extInfo.currencyType,
        bankName:res.extInfo.bankName,
        bankAccount:res.extInfo.bankAccount,
        corporate:res.extInfo.corporate,
        supplierTypeName:res.supplierTypeName,
        typeOfTaxpayer:res.extInfo.typeOfTaxpayer,
        invoiceType:res.extInfo.invoiceType,
        businessType:res.extInfo.businessType,
        companyProperty:res.extInfo.companyProperty,
        businessScope:res.extInfo.businessScope,
        companyProfiles:res.extInfo.companyProfiles,
        contact:res.contact,
        idCard:res.idCard,
        mobile:res.mobile,
        email:res.email,
        companyAddress:res.extInfo.companyAddress,
        supplierUserList:res.supplierUserList,
      };
    });
  }
  auditBasicInfo() {
    if (this.radioData == null) {
      this.msg.warning("请选择一条记录");
      return;
    }
  }
  applyBlack(id) {
    this.msg.success(id)
  }
  change(e) {
    console.log(e)
  }
}
