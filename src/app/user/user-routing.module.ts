import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // {path:"list", component:ListComponent},
  // {path:"login", component:LoginComponent},
  {
    path:"user",
    children:[ {path:"list", component:ListComponent},
    {path:"login", component:LoginComponent}]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }