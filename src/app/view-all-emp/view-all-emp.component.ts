import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-all-emp',
  templateUrl: './view-all-emp.component.html',
  styleUrls: ['./view-all-emp.component.css']
})
export class ViewAllEmpComponent {
  constructor(api:ApiService){
    api.fetchEmp().subscribe(
      (response)=>{
        this.data=response;
      }
    )
  }

 data:any=[]
}
