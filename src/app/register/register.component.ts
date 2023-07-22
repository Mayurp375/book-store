import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  empForm!: FormGroup;

  submitted = false;

  constructor(private fb: FormBuilder) {
    this.empForm = this.fb.group({
      firstName: '',
      lastname: '',
      gender: '',
      email: '',
      password: ''
    })
  }
}
