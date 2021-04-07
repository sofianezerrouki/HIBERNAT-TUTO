import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Doctor } from '../common/doctor';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private baseUrl = "http://localhost:8080/api/doctors";
  
  constructor(private httpClient:HttpClient) {

    

   }

  getDoctorList():Observable<Doctor[]>{
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(

      map(response=>response.doctors)

    )

  }
}
interface GetResponse{

  
    doctors:Doctor[];
 

}
