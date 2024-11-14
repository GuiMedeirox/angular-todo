import { DatePipe, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

export class Todo{
  constructor(public id: number, public description: string, public isDone:boolean, public dateAssigned: Date){}
}

@Component({
  selector: 'app-list-todos',
  standalone: true,
  imports: [NgIf, NgFor, UpperCasePipe, DatePipe, RouterLink, ],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})
export class ListTodosComponent {

  todoList = [ 
    new Todo(1,"Learn Angular", false, new Date()),
    new Todo(1,"Learn Java", true, new Date()),
    new Todo(1,"Learn Assembly", false, new Date())
  ]

  constructor(){ }

  ngOnInit(){  }

}
