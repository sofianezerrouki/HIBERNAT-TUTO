import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/comman/doctor';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-list-doctors',
  templateUrl: './list-doctors.component.html',
  styleUrls: ['./list-doctors.component.css']
})
export class ListDoctorsComponent implements OnInit {

  doctors:Doctor[];

  constructor(private doctorService:DoctorService) { }

  ngOnInit(): void {
    this.doctorService.getDoctorList().subscribe(
      data=>{
        this.doctors=data;
      }
   );
  }

}
