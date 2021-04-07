import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/common/doctor';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {

  doctors:Doctor[];

  constructor(private doctorService :DoctorService) { }

  ngOnInit() {
    
    this.getDoctors();

  }
  getDoctors() {
    this.doctorService.getDoctorList().subscribe(
      data=>{
        this.doctors=data
      }
    )
  }

}
