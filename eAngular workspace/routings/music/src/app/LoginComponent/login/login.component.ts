import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { User } from 'src/app/user/user';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  data:Object;
  msg:string;
  user = new User();
  succes=true;
  
  constructor(private http:HttpClient,private userService:UserService,private route:Router) {

   }

  onSubmit():void{
      this.succes=true;
      //console.log(this.user);
      this.userService.loginForRemote(this.user).subscribe(
        data=>{
          
          this.msg=""
          console.log('data recieved');
          this.route.navigate(['/home'])
        },
        error=>{
          console.log("bad credentiale ! ");
          this.msg="Bad Credential , Please enter Valid Email Or Passwoed "
          this.succes=false;
      }
      );
    
  }
}
