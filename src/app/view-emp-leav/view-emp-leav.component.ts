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

    api.LeaveCountEmp(data).subscribe(
      (response:any) => {
        console.log(response);
        this.fetchedCount=response
        this.total=response[0].casual+response[0].sick+response[0].special
      }
    )
  }
  fetchedData:any = []
  fetchedCount:any = []
  total = ""
}
