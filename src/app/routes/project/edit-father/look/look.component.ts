import { Component, OnInit } from '@angular/core';
import { NzModalRef, NzMessageService } from 'ng-zorro-antd';
import { _HttpClient } from '@delon/theme';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-eidt-father-look',
  templateUrl: './look.component.html',
  styleUrls: ['./look.component.less']
})
export class ProjectEidtFatherLookComponent implements OnInit {
  record: any = {};
  i: any;
  validateForm: FormGroup;
  type: any = '';
  value: any = '';
  types = ['url', 'email', 'tel', 'cn', 'vcard'];

  constructor(
    private modal: NzModalRef,
    public msg: NzMessageService,
    public http: _HttpClient,
    fb: FormBuilder
  ) {
    this.validateForm = fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [false],
    });
  }

  ngOnInit(): void {
    this.change('url')
    this.http.get(`/user/${this.record.id}`).subscribe(res => this.i = res);
  }

  close() {
    this.modal.destroy();
  }
  submitForm() {
    this.msg.success(JSON.stringify(this.validateForm.value));
  }
  change(type: string) {
    this.type = type;
    switch (type) {
      case 'url':
        this.value = 'https://ng-alain.com/';
        break;
      case 'email':
        this.value = 'mailto:cipchk@qq.com';
        break;
      case 'tel':
        this.value = 'tel:15900000000';
        break;
      case 'cn':
        this.value = '你好🇨🇳';
        break;
      case 'vcard':
        this.value = `BEGIN:VCARD
              VERSION:4.0
              N:色;卡;;Mr.;
              FN:卡色
              ORG:NG-ALAIN
              TITLE:NG-ALAIN
              PHOTO;MEDIATYPE=image/svg:https://ng-alain.com/assets/img/logo-color.svg
              TEL;TYPE=work,voice;VALUE=uri:tel:15900000000
              ADR;TYPE=WORK;PREF=1;LABEL="中国上海":;;上海;中国
              EMAIL:cipchk@qq.com
              x-qq:94458893
              END:VCARD`;
        break;
    }
  }
}
