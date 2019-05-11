import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class InternalGuard implements CanActivate {
  constructor(private router: Router,
    private userService: UserService)
  {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) :boolean {
      if(this.userService.current != null)
        return true;
      else
      {
        this.router.navigate(['/notAuthorized']);
      }
      
  }
  
}
