import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-todo-page',
  templateUrl: './create-todo-page.component.html',
  styleUrls: ['./create-todo-page.component.css'],
})
export class CreateTodoPageComponent implements OnInit {
  createTodoForm: FormGroup = this.formBuilder.group({
    title: '',
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.createTodoForm.value);
  }
}
