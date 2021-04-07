import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url : string;
  
  constructor(private http:HttpClient) { }

  loginForRemote(user:User):Observable<any>{
    this.url="http://localhost:8080/api/login";

    return this.http.post<any>(this.url,user
      );
  
  }
  signUpUser(user:User):Observable<any>{
    this.url = "http://localhost:8080/api/register";
    return this.http.post<any>(this.url,user);
  }

}
