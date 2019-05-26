import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: User;
  constructor(private userService: UserService,
    private router: Router) { 
    this.user = userService.current;
  }

  ngOnInit() {
  }

  logout() {
    this.userService.current = null;
    // route is changed to external module.
    this.router.navigate(['/external']);
  }
}
