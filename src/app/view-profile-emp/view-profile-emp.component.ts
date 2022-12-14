import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-profile-emp',
  templateUrl: './view-profile-emp.component.html',
  styleUrls: ['./view-profile-emp.component.css']
})
export class ViewProfileEmpComponent {
  empId:any = ""
  fetchedData:any = []

  constructor(private api:ApiService){
    this.empId = localStorage.getItem("empId")
    console.log(this.empId);
    let data:any = {
      "id":this.empId
    }
    console.log(data);
    
    this.api.viewEmpProfile(data).subscribe(
      (response:any) => {
        this.fetchedData=response
      }
    )
  }
}
