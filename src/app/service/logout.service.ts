import { Injectable } from '@angular/core';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor( private hardcodedAuthenticationService : HardcodedAuthenticationService) { }

  ngOnInit(){
    this.hardcodedAuthenticationService.logout();
  }

}
