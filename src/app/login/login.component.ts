import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent {

  username:string = "";
  password:string = "";
  statusMessage:string=""; 
  loginIsValid:boolean=false; 

  //dependency injection
  //it's mandatory to inform the visibility level
  constructor(private router: Router, public hardcodedAuthenticationService: HardcodedAuthenticationService){   }

  ngOnInit(){}
  

  tryToLogIn():boolean{
    console.log('username: '+this.username);
    console.log('password: ' +this.password);
    if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)){
      this.router.navigate(["welcome", this.username]);
      return true;
    }

    this.loginIsValid=false; 
    this.statusMessage="invalid credentials"; 
    console.log("login is valid: " +this.loginIsValid);
    return false; 
  }

} 