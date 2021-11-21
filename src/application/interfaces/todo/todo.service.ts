import { Observable } from 'rxjs';
import { TodoModel } from '../../../application';

export interface TodoService {
  getTodo(id: number): Observable<TodoModel>;
}
