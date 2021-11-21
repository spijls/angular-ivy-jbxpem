import { Observable } from 'rxjs';
import { TodoModel } from '../../../application';

export abstract class TodoService {
  abstract getTodo(id: number): Observable<TodoModel>;
}
