import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { AlertService } from 'ngx-alerts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:User;
  constructor(private userService: UserService,
    private alert: AlertService,
    private router: Router) { 
    this.user = userService.current;
  }

  ngOnInit() {
  }
  update() {
    this.userService.updateUser(this.user)
    .subscribe((result)=>{
        this.alert.success('successfully updated.');
        this.router.navigate(['/internal']);
    });
  }
}
