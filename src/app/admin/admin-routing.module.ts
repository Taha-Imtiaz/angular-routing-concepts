import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // {
  //   path:'login',
  //   component:LoginComponent
  // },
  // {
  //   path:'list',
  //   component:ListComponent
  // }
  // group routing
  {
    path:"admin",
    children:[{
        path:'login',
        component:LoginComponent
      },
      {
        path:'list',
        component:ListComponent
      }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
