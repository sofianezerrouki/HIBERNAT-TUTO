import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, AbstractFormGroupDirective, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo-form-sku',
  templateUrl: './demo-form-sku.component.html',
  styleUrls: ['./demo-form-sku.component.css']
})
export class DemoFormSkuComponent implements OnInit {

  myForm:FormGroup;
  sku:AbstractControl;
  msg="";
  productName: string;
  
  constructor(fb:FormBuilder) {
    this.myForm= fb.group({
      "sku":['',Validators.required]
    });
    this.sku = this.myForm.controls['sku'];
    this.sku.valueChanges.subscribe(
      (value: string) =>{
        console.log('sku changed to:', value);
      }
    );
    this.myForm.valueChanges.subscribe(
        (form:any)=>{
          console.log('form changed to:', form);
        }
    )
  }
  onSubmit(form: any): void {
    if(form.sku=="" || form.sku==null){
      this.msg="Form is invalid";
      console.log(form.sku);
    }

    else console.log('you submitted value:', form);
   
  }
  ngOnInit(): void {
  }

}
