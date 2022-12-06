import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  fetchEmp=()=>{
    return this.http.get("http://localhost:8080/viewallemp")
  }

  addEmp=(dataToSend:any)=>
    {
      return this.http.post("http://localhost:8080/addemp",dataToSend)
    }
}
