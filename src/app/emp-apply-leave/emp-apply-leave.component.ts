import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-emp-apply-leave',
  templateUrl: './emp-apply-leave.component.html',
  styleUrls: ['./emp-apply-leave.component.css']
})
export class EmpApplyLeaveComponent {
  constructor(private api:ApiService) {}
  title = ""
  remarks = ""
  fromDate = ""
  toDate = ""
  type = ""
  status = "pending"
  empId = localStorage.getItem("empId")
  date = new Date()
  day = this.date.getDate()
  month = this.date.getMonth() + 1
  year = this.date.getFullYear()
  appliedDate = `${this.year}-${this.month}-${this.day}`

  readValues = () => {
    let data:any = {
      "title":this.title,
      "remarks":this.remarks,
      "fromDate":this.fromDate,
      "status":this.status,
      "toDate":this.toDate,
      "type":this.type,
      "appliedDate":this.appliedDate,
      "empId":this.empId
    }
    console.log(data);
    this.api.applyLeave(data).subscribe(
      (response:any) => {
        console.log(response); 
        if(response.status == "success"){
          alert("Added Successfully")
          this.title = ""
          this.remarks = ""
          this.fromDate = ""
          this.toDate = ""
          this.type = ""
        } else {
          alert("You don't have sufficient leaves")
        }
      }
    )
  }
}
