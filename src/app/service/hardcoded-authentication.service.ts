import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username:string, password:string):boolean{    
    sessionStorage.setItem('authenticateUser', username);
    return username==="gmx" && password==="123";
  }

  isUserLoggedIn():boolean{
    let user = sessionStorage.getItem('authenticateUser');
    console.log(user !== null);
    return user !== null;
  }

  logout():void{
    sessionStorage.removeItem('authenticateUser');
  }


}
