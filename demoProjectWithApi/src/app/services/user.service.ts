import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

 
  // reference of the currently loggedIn users.
  current: User;
  constructor(private http: HttpClient) 
  {
   this.current = new User();
  }
  // Method to register a user
  register(u: User) :Observable<any>
  {
    // post method of the httpService is invoked
   return this.http.post(environment.apiUrl,u);
  }

  // Method to login a user
  login(u: User) :Observable<User> {
   const url = environment.apiUrl+"/login";
   return this.http.post<User>(url,u);
  }
   // Method to update a user
   updateUser(u: User) :Observable<any> {
    return this.http.put<User>(environment.apiUrl,u);
   }
}
