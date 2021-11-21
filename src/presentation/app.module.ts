// Modules - Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Modules - App
import { AppRouterModule } from './app-router.module';

// Services - Application
import { TodoService, TodoServiceImpl, TodoRepository } from '../application';

// Services - Infrastructure
import { TodoRepositoryImpl } from '../infrastructure';

// Components
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRouterModule],
  declarations: [AppComponent],
  providers: [
    { provide: TodoService, useClass: TodoServiceImpl },
    { provide: TodoRepository, useClass: TodoRepositoryImpl },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
