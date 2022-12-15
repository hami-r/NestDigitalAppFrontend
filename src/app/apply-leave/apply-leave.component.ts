import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent {
  constructor(private api:ApiService){
    this.api.viewAllPendingLeaves().subscribe(
      (response:any) => {
        console.log(response);
        this.data=response
        // var arr_names:number[] = new Array(response.length)
        // for(let i=0;i<response.length;i++){
        //   let to:Date = new Date(response[i].to_date)
        //   let from:Date = new Date(response[i].from_date)
        //   this.total=Math.abs(Math.ceil((to.getTime()-from.getTime())/(1000*3600*24))+1)
        //   this.arr_names.push(this.total)
        //   console.log(this.arr_names);
          
        // }
      }
    )
  }
  data:any = []
  // total = 0
  // arr_names:any = []
  acceptBtn = (id:any) => {

  }

  rejectBtn = (id:any) => {

  }
}
