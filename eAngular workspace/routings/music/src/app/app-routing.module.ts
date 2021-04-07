import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './AboutComponent/about/about.component';
import { ForgotPasswordComponent } from './ForgotpasswordComponent/forgot-password/forgot-password.component';
import { HomeComponent } from './HomeComponent/home/home.component';
import { LoginComponent } from './LoginComponent/login/login.component';
import { LogOutComponent } from './LogOutComponent/log-out/log-out.component';
import { PdfsComponent } from './PdfsComponent/pdfs/pdfs.component';
import { SignUpComponent } from './SignUpComponent/sign-up/sign-up.component';

const routes: Routes = [
  {path:"",redirectTo:"",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"pdfs",component:PdfsComponent},
  {path:"about",component:AboutComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignUpComponent},
  {path:"logout",component:LogOutComponent},
  {path:"forgotpassword",component:ForgotPasswordComponent},
  {path:"**",redirectTo:"home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
