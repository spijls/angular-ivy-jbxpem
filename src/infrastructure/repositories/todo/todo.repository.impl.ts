import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoModel, TodoRepository } from '../../../application';
import { Observable } from 'rxjs';

@Injectable()
export class TodoRepositoryImpl implements TodoRepository {
  BASE_URL: string = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<TodoModel[]> {
    return this.http.get<TodoModel[]>(`${this.BASE_URL}`);
  }

  getTodo(id: number): Observable<TodoModel> {
    return this.http.get<TodoModel>(`${this.BASE_URL}/${id}`);
  }
}
