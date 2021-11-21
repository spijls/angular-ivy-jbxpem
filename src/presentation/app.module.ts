import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TodoService, TodoServiceImpl, TodoRepository } from '../application';
import { TodoRepositoryImpl } from '../infrastructure';

import { AppComponent } from './app.component';
import { TodoComponent } from './components';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [
    { provide: TodoService, useClass: TodoServiceImpl },
    { provide: TodoRepository, useClass: TodoRepositoryImpl },
  ],
  declarations: [AppComponent, TodoComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
