import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BackendApiService } from '../services/backend-api.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  empForm!: FormGroup;

  submitted = false;

  constructor(
    private fb: FormBuilder,
    private userService: BackendApiService,
    private dialogRef: MatDialogRef<RegisterComponent>
  ) {

    this.empForm = this.fb.group({
      firstName: '',
      lastName: '',
      gender: '',
      email: '',
      password: ''
    })
  }

  onFormSubmit() {
    if (this.empForm.valid) {

      this.userService.registerUser(this.empForm.value).subscribe({
        next: (val: any) => {
          alert('Emlopyee added succesfully');
          console.log(this.empForm.value);
          this.dialogRef.close(true);
        }
      })
    }
  }
}
