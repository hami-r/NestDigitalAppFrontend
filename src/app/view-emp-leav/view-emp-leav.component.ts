import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-emp-leav',
  templateUrl: './view-emp-leav.component.html',
  styleUrls: ['./view-emp-leav.component.css']
})
export class ViewEmpLeavComponent {
  empId = localStorage.getItem("empId")
  constructor(private api:ApiService){
    let data = {
      "empId":this.empId
    }
    console.log(data);
    this.api.LeaveStatusEmp(data).subscribe(
      (response:any) => {
        this.fetchedData=response
      }
    )
  }
  fetchedData:any = []
}
