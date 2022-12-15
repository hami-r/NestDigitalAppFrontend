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
  acceptBtn = (id:any,empId:any,type:any,fromDate:any,toDate:any) => {
    let data = {
      "id":id,
      "empId":empId,
      "fromDate":fromDate,
      "toDate":toDate,
      "type":type
    }
    console.log(data);
    this.api.acceptLeave(data).subscribe(
      (response:any) => {
        console.log(response);
        if(response.status=="success"){
          alert("Leave Accepted")
        }else{
          alert("Something went wrong")
        }
      }
    )
  }

  rejectBtn = (id:any) => {
    let data = {
      "id":id
    }
    console.log(data);
    
    this.api.rejectLeave(data).subscribe(
      (response:any) => {
        console.log(response);
        if(response.status == "success"){
          alert("Leave is rejected")
          location.reload()
        } else{
          alert("Something went wrong")
        }
      }
    )
  }
}
