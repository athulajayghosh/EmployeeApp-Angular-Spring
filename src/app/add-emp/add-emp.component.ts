import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent {
  empcode=""
  empname=""
  designation=""
  salary=""
  companyname=""
  mobile=""
  username=""
  password=""
  constructor(private api:ApiService){}

  readValues=()=>
  {
    let data:any={
      empname : this.empname,
      empcode:this.empcode,
      designation:this.designation,
      salary:this.salary,
      companyname:this.companyname,
      mobile:this.mobile,
      username:this.username,
      password:this.password
      }
      this.api.addEmp(data).subscribe(
      (response)=>{
      console.log(response)
      alert("Employee Added")
    }
  )  


  }

 

}
