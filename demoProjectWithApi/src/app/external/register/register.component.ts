import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { AlertService } from 'ngx-alerts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User;

  constructor(private userService: UserService,
    private alertService: AlertService,
    private router: Router) { 
    this.user = new User();
  }

  ngOnInit() {
  }
  register() {
    // copy of the user object is created.
    let toBeRegistered = Object.assign({},this.user);
    this.userService.register(toBeRegistered)
    .subscribe((result)=>{
      console.log(result);
      this.alertService.success('Successfully registered.');
      // Route is changed to the login.
      this.router.navigate(['/login']);
    });
   
  }
 
}
