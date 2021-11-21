import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoService, TodoRepository } from '../../../application';
import { TodoModel } from '../../models';

@Injectable()
export class TodoServiceImpl implements TodoService {
  constructor(private todoRepository: TodoRepository) {}

  getTodos(): Observable<TodoModel[]> {
    return this.todoRepository.getTodos();
  }

  getTodo(id: number): Observable<TodoModel> {
    return this.todoRepository.getTodo(id);
  }
}
