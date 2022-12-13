import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-all-logs',
  templateUrl: './view-all-logs.component.html',
  styleUrls: ['./view-all-logs.component.css']
})
export class ViewAllLogsComponent {
  constructor(private api:ApiService){
    this.api.viewAllEmpLogs().subscribe(
      (response:any) => {
        this.employeelogs=response
      }
    )
    this.api.viewAllVisLogs().subscribe(
      (response:any) => {
        this.visitorlogs=response
      }
    )
  }
  employeelogs:any = []
  visitorlogs:any = []
}
