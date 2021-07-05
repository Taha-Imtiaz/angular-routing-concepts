import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './users/login/login.component';
import { SignupComponent } from './users/signup/signup.component';

const routes: Routes = [
  // add routing
  {

    path: "users",
    component: UserComponent
  },
  {

    path: "admin",
    component: AdminComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },

  // video # 34 lazy loading
  {
    path: "customer",
    // load children of customer module
    loadChildren: () => import("./customer/customer.module").then((module) => module.CustomerModule)
  },
  {
    path: "artist",
    // load children of artist module
    loadChildren: () => import("./artist/artist.module").then((module) => module.ArtistModule)
  },
  {

    path: "**",
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
