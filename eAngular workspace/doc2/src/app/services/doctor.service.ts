import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../comman/doctor';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private baseUrl = "http://localhost:8080/api/doctors"

  constructor(private httpClient: HttpClient) { }

  getDoctorList(): Observable<any> {
      return this.httpClient.get(this.baseUrl).pipe(
          map(this.extractData)
      )
  }
  private extractData(res: Response): any {
    const body = res;
    return body || { };
  }

}
interface GetResponse{

}