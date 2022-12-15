import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-logs-by-date',
  templateUrl: './view-logs-by-date.component.html',
  styleUrls: ['./view-logs-by-date.component.css']
})
export class ViewLogsByDateComponent {
  constructor(private api:ApiService){}
  date = ""
  empData:any = []
  visData:any = []
  visHide:boolean = false
  empHide:boolean = false
  byDate = () => {
    let data:any = {
      "date":this.date
    }
    console.log(data);
    this.api.viewEmpLogsDate(data).subscribe(
      (response:any) => {
        console.log(response);
        if (response.length==0) {
          this.empHide=false
        } else {
          this.empData=response
          this.empHide=true
        }
      }
    )

    this.api.viewVisLogsDate(data).subscribe(
      (response:any) => {
        console.log(response);
        if (response.length==0) {
          this.visHide=false
        } else {
          this.visData=response
          this.visHide=true
        }
      }
    )
  }
}
