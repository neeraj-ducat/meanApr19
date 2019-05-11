import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import {LocalStorageService} from 'ngx-webstorage';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  // array to store users
  users: User[];
  // reference of the currently loggedIn users.
  current: User;
  constructor(private storage: LocalStorageService) 
  {
   // data is loaded from the local storage into the users array.
   this.users = this.storage.retrieve('users');
   if (this.users == null || this.users == undefined)
     this.users = Array();
  }
  // Method to register a user
  register(u: User) {
    // user is added to the users array
    this.users.push(u);
    // users array is stored in the local storage
    this.storage.store('users', this.users);
  }

  // Method to login a user
  login(u: User) :boolean {
    let status = false;
    if (this.users.length > 0)
    {
      this.users.forEach((user) => {
        if (user.mailId === u.mailId && user.password === u.password)
        {
          // reference of the matched object is saved
          this.current = user;
          status = true;
        }
      });
    }
    return status;
  }
}
