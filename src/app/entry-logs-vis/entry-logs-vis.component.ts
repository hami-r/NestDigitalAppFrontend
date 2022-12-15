import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-entry-logs-vis',
  templateUrl: './entry-logs-vis.component.html',
  styleUrls: ['./entry-logs-vis.component.css']
})
export class EntryLogsVisComponent {
  constructor(private api:ApiService){}
  name = ""
  purpose = ""
  whomToMeet = ""
  date = ""
  entryTime = ""
  exitTime = ""

  readValues = () => {
    let data = {
      "name":this.name,
      "purpose":this.purpose,
      "whomToMeet":this.whomToMeet,
      "date":this.date,
      "entryTime":this.entryTime,
      "exitTime":this.exitTime
    }
    console.log(data);
    this.api.EntryVisLogs(data).subscribe(
      (response:any) => {
        console.log(response);
        if(response.status == "success"){
          alert("Added Successfully")
          this.name = ""
          this.purpose = ""
          this.whomToMeet = ""
          this.date = ""
          this.entryTime = ""
          this.exitTime = ""
        }else{
          alert("Something went wrong")
        }
      }
    )
  }
}
