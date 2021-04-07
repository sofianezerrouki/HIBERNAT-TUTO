import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './HomeComponent/home/home.component';
import { AboutComponent } from './AboutComponent/about/about.component';
import { LoginComponent } from './LoginComponent/login/login.component';
import { PdfsComponent } from './PdfsComponent/pdfs/pdfs.component';
import { SignUpComponent } from './SignUpComponent/sign-up/sign-up.component';
import { LogOutComponent } from './LogOutComponent/log-out/log-out.component';
import { SearchComponent } from './SearchComponent/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { ForgotPasswordComponent } from './ForgotpasswordComponent/forgot-password/forgot-password.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { PdfItemComponent } from './PdfItemComponent/pdf-item/pdf-item.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    PdfsComponent,
    SignUpComponent,
    LogOutComponent,
    SearchComponent,
    ForgotPasswordComponent,
    PdfItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
