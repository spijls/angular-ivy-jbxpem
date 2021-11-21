import { Observable } from 'rxjs';
import { TodoModel } from '../../../application';

export abstract class TodoService {
  abstract getTodos(): Observable<TodoModel[]>;
  abstract getTodo(id: number): Observable<TodoModel>;
}
