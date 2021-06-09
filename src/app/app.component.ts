import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { UserServiceService } from './user-service.service';
import { UsersDataService } from './users-data.service';
import { dataType } from "./user"
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'second-app-with-angular-routing';
  name = ""
  data = []

  // video # 39
  // loginForm = new FormGroup({
  //   username: new FormControl('',Validators.required),
  //   password: new FormControl(''),

  // })
  loginForm = new FormGroup({
    username: new FormControl('user1@gmail.com'),
    password: new FormControl('pass123'),

  })
  collectData() {
    console.log(this.loginForm.value);
    
  }
  constructor(private viewContaierRef: ViewContainerRef, private cfr: ComponentFactoryResolver) {

  }

  // add service as a dependency injection in service
  // video # 27
  // constructor(private user: UsersDataService) {
  //   // print the data of a service by getData()
  //   console.log(this.user.getData())
  //   let data = this.user.getData()
  //   this.name = data.name
  // }
  // video # 28
  //   constructor(private user: UserServiceService) {
  //   //  subscribe a service
  //   this.user.getFakeData().subscribe(data =>{
  //     console.log(data)
  //     this.data = data
  //   })
  // }

  // Video # 30
  getModelData() {
    // apply interface to model data
    const modelData: dataType = {
      name: "Taha Imtiaz",
      id: 100,
      pakistani: true,
      address: 'abc123 street'
    }
    return modelData
  }

  // Video # 35
  // async loadAdmin() {
  //   // clear view Container
  //   this.viewContaierRef.clear()
  // // import admin list component
  // const { AdminlistComponent } = await import("./adminlist/adminlist.component")
  // // create new dynamic component 
  // this.viewContaierRef.createComponent(
  //   this.cfr.resolveComponentFactory(AdminlistComponent)
  // )

  // }
  // async loadUser() {// clear view Container
  //   this.viewContaierRef.clear()
  // // import user list component
  // const { UserlistComponent } = await import("./userlist/userlist.component")
  // // create new dynamic component 
  // this.viewContaierRef.createComponent(
  //   this.cfr.resolveComponentFactory(UserlistComponent)
  // )

  // }

  // video # 37
  onSubmit(data) {
    console.log(data);

  }
  // Video # 39
  get email() {
    return this.loginForm.get('email')
  }
  // Video # 41
  userData = {
    email: "test@gmail.com",
    password: "pass123",
    address: "abc street",
    mobile: "1234567889"
  }
}
