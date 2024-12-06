import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { WelcomeDataService } from '../service/welcome-data.service';
import { NgIf } from '@angular/common';



@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  constructor(
    private route: ActivatedRoute,
    private welcomeBean: WelcomeDataService){}

  username:string=""; 
  helloCustomMessage:string="";
  helloErrorMessage:string="";
  
  ngOnInit(){
    this.username = this.route.snapshot.params["name"];
  }

  getWelcomeMessage(){
    this.welcomeBean.welcomeMessage(this.username).subscribe(
    (r) => { 
      this.helloCustomMessage = r.message;
      console.log(r.message);
      
     },
    (error) => { 
      console.log(error); 
    
      this.helloErrorMessage = "some error happened while the API was requisited"
    }
    
    );

  }

}