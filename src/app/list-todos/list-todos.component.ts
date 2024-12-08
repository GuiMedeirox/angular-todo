import { DatePipe, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo{
  constructor(public id: number, public description: string, public isDone: boolean, public dateAssigned: Date){}
}

@Component({
  selector: 'app-list-todos',
  standalone: true,
  imports: [NgIf, NgFor, UpperCasePipe, DatePipe, RouterLink, ],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})
export class ListTodosComponent {

  todoList: Todo[] = []; 

  constructor( /* the visibility modifier is mandatory */ private todoService: TodoDataService){ }

  ngOnInit(){  

     this.todoService.getAllTodos('gmx').subscribe(
      (response) => { 
        this.todoList=response; 
        console.log(response);
        
      },
      (error) => console.log(error)
    ); 
    
  }
}