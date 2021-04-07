import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { ListDoctorsComponent } from './components/list-doctors/list-doctors.component';
import { from } from 'rxjs';
import { DoctorService } from './services/doctor.service';

@NgModule({
  declarations: [
    AppComponent,
    ListDoctorsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule  ],
  providers: [DoctorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
