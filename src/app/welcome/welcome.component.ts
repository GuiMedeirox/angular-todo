import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  constructor(private route: ActivatedRoute){}

  username:string=""; 

  ngOnInit(){
    this.username = this.route.snapshot.params["name"];
  }

}
