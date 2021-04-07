import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/user/user';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  //user = new User();
  myForm:FormGroup;
  userName:AbstractControl;
  emailId:AbstractControl;
  password:AbstractControl;
  bool=true;
  msg: any;

  constructor(http:HttpClient,private userService:UserService,private fb:FormBuilder,private router:Router) {
    
    this.myForm = fb.group({
      'userName':['',Validators.required],
      'emailId':['',Validators.email ],
      'password':['',Validators.minLength(4)]
    });   
    this.userName = this.myForm.controls['userName']; 
    this.emailId = this.myForm.controls['emailId']; 
    this.password = this.myForm.controls['password']; 

  }



  signUpUser(user:User):void{
    
    console.log(user);
    this.userService.signUpUser(user).subscribe(
      data=>{
        
        console.log("data recieved")
        console.log(user);
        this.router.navigate(['login']);
      },
      error=>{
        this.bool=false;
        if(error.error.trace.includes("javax.validation")){
          this.msg="Invalid Form"
        }else{
          this.msg=error.error.message
        }
        console.log("exception recieved\n", error.error);
        
      })
  }

  ngOnInit(): void {
  }

}
