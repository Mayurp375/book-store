import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent {

  // empForm!: FormGroup;
  email: any;
  password: any

  constructor(private route: Router , private router: ActivatedRoute) {

  }
  redirect() {
    console.log("method called")
    console.log(this.route)
    this.route.navigateByUrl("login")
    console.log("I am not redirecting if i a called")
   
  }
  // userLoging():any
}