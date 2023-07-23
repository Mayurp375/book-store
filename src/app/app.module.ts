import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import BrowserAnimationsModule for Angular Material animations
import { MatButtonModule } from '@angular/material/button'; // Import the MatButtonModule for the 'mat-raised-button'
import { MatDialogModule } from '@angular/material/dialog'; // Import the MatDialogModule for the MatDialog

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { LoginformComponent } from './loginform/loginform.component';
import { RegisterComponent } from './register/register.component';

import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    RegisterComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, FormsModule, ReactiveFormsModule, MatDialogModule,MatInputModule,MatRadioModule
    ,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
