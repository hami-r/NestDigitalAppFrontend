import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent {
  constructor(private api:ApiService){}
  name = ""
  searchData:any = []
  hide:boolean = false
  searchEmployee = () => {
    let data:any = {
      "name":this.name
    }
    console.log(data);
    this.api.searchEmployee(data).subscribe(
      (response:any) => {
        console.log(response);
        if (response.length==0) {
          this.hide=false
          alert("Invalid")
        } else {
          this.searchData=response
          this.hide=true
        }
      }
    )
  }


  deleteBtn = (id:any) => {
    let data:any = {
      "id":id
    }
  }
}
