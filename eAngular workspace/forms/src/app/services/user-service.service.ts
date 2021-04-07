import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
n
  user: any;

  setUser(newUser) {
    this.user = newUser;
  }

  getUser(): any {
  return this.user;
  }
  
}
