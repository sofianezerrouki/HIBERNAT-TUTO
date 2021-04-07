import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DoctorListComponent } from './components/doctor-list/doctor-list.component';
import { DoctorService } from './services/doctor.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { RegisterSuccessComponent } from './register-success/register-success.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"doctors",component:DoctorsComponent},
  {path:"blog",component:BlogComponent},
  {path:"register-success",component:RegisterSuccessComponent},
  {path:"register", component:RegisterComponent},
  {path:"login",component:LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DoctorListComponent,
    HeaderComponent,
    HomeComponent,
    DoctorsComponent,
    BlogComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DoctorService],
  bootstrap: [AppComponent],
  exports:[RouterModule]
})
export class AppModule { }

