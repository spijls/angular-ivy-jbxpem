import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {
  HomePageComponent,
  TodosPageComponent,
  TodoDetailPageComponent,
} from './pages';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'todos/:todoId', component: TodoDetailPageComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [
    HomePageComponent,
    TodosPageComponent,
    TodoDetailPageComponent,
  ],
  exports: [RouterModule],
})
export class AppRouterModule {}
