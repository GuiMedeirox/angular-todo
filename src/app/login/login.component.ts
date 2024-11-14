import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

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
  constructor(private router: Router){   }

  ngOnInit(){}
  

  tryToLogIn():boolean{
    console.log('username: '+this.username);
    console.log('password: ' +this.password);
    
    if(this.username === "gmx" && this.password === "123"){  
      this.loginIsValid=true; 
      this.statusMessage="valid credentials";    
      console.log("login is valid: " +this.loginIsValid);
     
      this.router.navigate(["welcome", this.username]);
      return true; 
    }
      this.loginIsValid=false; 
      this.statusMessage="invalid credentials"; 
      console.log("login is valid: " +this.loginIsValid);
      return false; 
  }

} 