import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';
@Injectable({
  providedIn: 'root'
})
export class RouteguardService implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.hardcodedAuthenticationService.isUserLoggedIn())
      return true;
    this.router.navigate(['login']); //redirect to login page if user isnt logged
    return false;
  }

  constructor(private hardcodedAuthenticationService: HardcodedAuthenticationService, private router: Router) { }
}
