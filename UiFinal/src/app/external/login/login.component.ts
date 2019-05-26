import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  constructor(private userService: UserService,
    private router: Router,
    private alert: AlertService) { }

  ngOnInit() {
    this.user = new User();
  }

  login() {
    this.userService.login(this.user)
    .subscribe((result) => {
      if(result)
      {
       // console.log(result); 
       this.userService.current.mailId = result.mailId;
       this.userService.current.name = result.name;
       this.userService.current._id = result._id;
       this.userService.current.imageUrl = result.imageUrl;
       this.router.navigate(['/internal']);
      }
      else
      this.alert.danger('MailId or Password is incorrect.');
    });
  }
}
