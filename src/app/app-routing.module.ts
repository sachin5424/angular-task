import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogTableComponent } from './blog-table/blog-table.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {_httpAuthGuard} from './auth.guard'
const routes: Routes = [
  {
    path:'register', 
    component:RegisterComponent,

  },
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"blog-tabel",
    component:BlogTableComponent,
    canActivate:[_httpAuthGuard]
  },
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
