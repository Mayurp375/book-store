import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent {

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