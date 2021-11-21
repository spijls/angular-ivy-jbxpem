import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../../../application';
import { TodoModel } from '../../../application/models/todo/todo.model';

@Component({
  selector: 'app-todo-detail-page',
  templateUrl: './todo-detail-page.component.html',
  styleUrls: ['./todo-detail-page.component.css'],
})
export class TodoDetailPageComponent implements OnInit {
  todo: TodoModel;

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService
  ) {}

  ngOnInit() {
    const paramTodoId = this.route.snapshot.paramMap.get('todoId');
    const todoId = parseInt(paramTodoId);

    this.todoService.getTodo(todoId).subscribe((todo) => {
      this.todo = todo;
    });
  }
}
