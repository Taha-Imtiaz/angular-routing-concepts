import { Injectable } from '@angular/core';
import {dataType} from "./user"


@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  constructor() { }
  getData(){
   return {
    name:"Taha",
    age:25,
    id:10
   }
  }

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
