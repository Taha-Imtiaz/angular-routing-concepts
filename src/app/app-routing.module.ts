import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './users/login/login.component';
import { SignupComponent } from './users/signup/signup.component';

const routes: Routes = [
  // add routing
  // {

  //   path: "users",
  //   component: UserComponent
  // },
  // {

  //   path: "admin",
  //   component: AdminComponent
  // },
  // {
  //   path:"login",
  //   component: LoginComponent
  // },
  // {
  //   path:"signup",
  //   component:SignupComponent
  // },
  // {

  //   path: "**",
  //   component: PageNotFoundComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
