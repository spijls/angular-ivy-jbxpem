import { Component, OnInit } from '@angular/core';
import { TodoService, TodoModel } from '../../../application';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todoId: number;
  todo: TodoModel;

  constructor(private todoService: TodoService) {}

  ngOnInit() {}

  loadTodo() {
    if (!this.todoId) return;

    this.todoService.getTodo(this.todoId).subscribe((todo) => {
      console.log('Retrieved todo...');
      this.todo = todo;
    });
  }
}
