import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginformComponent } from './loginform/loginform.component';
import { RegisterComponent } from './register/register.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'book-store';

  constructor(public dialog: MatDialog) {}

  openRegisterDialog(): void {
    const dialogRef = this.dialog.open(RegisterComponent, {
      width: '1000px', 
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }
  openLoginDialog(): void {
    const dataRef = this.dialog.open(LoginformComponent, {
      width: '500px', 
    });

    dataRef.afterClosed().subscribe(result => {
      
    });
  }

}