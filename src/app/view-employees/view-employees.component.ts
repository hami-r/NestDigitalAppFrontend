import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent {
  constructor(private api:ApiService){
    this.api.viewEmployee().subscribe(
      (response:any) => {
        this.employees=response
      }
    )
  }
  employees:any = []

  deleteBtn = (id:any) => {
    let data:any = {
      "id":id
    }
    this.api.deleteEmployee(data).subscribe(
      (response:any) => {
        console.log(response);
        if(response.status == "success"){
          alert("Deleted Successfully")
          location.reload();
        }else{
          alert("Something went wrong")
        }
      }
    )
  }
}
