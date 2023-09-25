import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginformComponent } from './loginform/loginform.component';

const routes: Routes = [
  {
    path:"register",
     component:RegisterComponent
  },
  {
    path:"login",
     component:LoginformComponent
  }, {
    path:"register",
     component:RegisterComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
