import { Component } from '@angular/core';
import { UserServiceService } from './user-service.service';
import { UsersDataService } from './users-data.service';
import {dataType} from "./user"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'second-app-with-angular-routing';
  name = ""
  data = []

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
getModelData(){
  // apply interface to model data
  const modelData:dataType = {
    name:"Taha Imtiaz",
    id:100,
    pakistani:true,
    address: 'abc123 street'
  } 
  return modelData
}
}
