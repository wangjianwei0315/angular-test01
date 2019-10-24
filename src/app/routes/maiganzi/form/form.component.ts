import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-maiganzi-form',
  templateUrl: './form.component.html',
})
export class MaiganziFormComponent implements OnInit {
  validateForm: FormGroup;
  radioValue: 'C';
  checkedStar = 6.5;
  slider01: any = 10;

  constructor(private http: _HttpClient, private fb: FormBuilder) { }

  ngOnInit() { }
  submit() {
    console.log(this.validateForm.controls)
  }
  radioChange(value: any) :void {
    console.log(value)
    console.log('the value has been changed')
  }
  starChange(e: any) {
    console.log(e)
  }

}
