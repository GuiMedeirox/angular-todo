import { DatePipe, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-todos',
  standalone: true,
  imports: [NgIf, NgFor, UpperCasePipe, DatePipe, RouterLink, ],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})
export class ListTodosComponent {

  todoList = [ 
    {id:1, description:"Learn Angular"},
    {id:2, description:"Learn Java"},
    {id:3, description:"Learn Assembly"},
  ]

  constructor(){ }

  ngOnInit(){  }

}
