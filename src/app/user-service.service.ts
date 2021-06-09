import { Injectable } from '@angular/core';
// import httpClient for calling an API
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }
  getFakeData() {
    let url = "https://jsonplaceholder.typicode.com/todos"
    return this.http.get(url)
  }
}
