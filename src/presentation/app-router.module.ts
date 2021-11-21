import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {
  HomePageComponent,
  TodosPageComponent,
  TodoDetailPageComponent,
  CreateTodoPageComponent,
} from './pages';
import { TodoDetailComponent } from './components';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'todos', component: TodosPageComponent },
  { path: 'todos/create', component: CreateTodoPageComponent },
  { path: 'todos/:todoId', component: TodoDetailPageComponent },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  declarations: [
    HomePageComponent,
    TodosPageComponent,
    CreateTodoPageComponent,
    TodoDetailPageComponent,
    TodoDetailComponent,
  ],
  providers: [FormBuilder],
})
export class AppRouterModule {}
