import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TodoService, TodoServiceImpl, TodoRepository } from '../application';
import { TodoRepositoryImpl } from '../infrastructure';

import {
  HomePageComponent,
  TodosPageComponent,
  TodoDetailPageComponent,
} from './pages';
import { AppComponent } from './app.component';
import { TodoDetailComponent } from './components';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'todos/:todoId', component: TodoDetailPageComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [
    AppComponent,
    HomePageComponent,
    TodoDetailPageComponent,
    TodoDetailComponent,
  ],
  providers: [
    { provide: TodoService, useClass: TodoServiceImpl },
    { provide: TodoRepository, useClass: TodoRepositoryImpl },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
