import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-entry-logs',
  templateUrl: './entry-logs.component.html',
  styleUrls: ['./entry-logs.component.css']
})
export class EntryLogsComponent {
  constructor(private api:ApiService){}
  date=""
  entryTime = ""
  exitTime = ""
  employeeCode = ""

  readValues = () => {
    let data = {
      "date":this.date,
      "entryTime":this.entryTime,
      "exitTime":this.exitTime,
      "employeeCode":this.employeeCode
    }
    console.log(data);
    
    this.api.EntryEmpLogs(data).subscribe(
      (response:any) => {
        if(response.status == "success"){
          alert("Added Successfully")
          this.date=""
          this.entryTime = ""
          this.exitTime = ""
          this.employeeCode = ""
        } else {
          alert("Cannot ADD!\nEmployee is on leave")
        }
      }
    )
  }
}
