import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../../application';
import { TodoModel } from '../../../application/models/todo/todo.model';

@Component({
  selector: 'app-todos-page',
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.css'],
})
export class TodosPageComponent implements OnInit {
  todos: TodoModel[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getTodos().subscribe((todos) => {
      console.log(todos);
      this.todos = todos;
    });
  }
}
