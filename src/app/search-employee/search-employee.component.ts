import { Component } from '@angular/core';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent {
  name = ""
  searchData:any = []
  searchEmployee = () => {
    let data:any = {
      "name":this.name
    }
    console.log(data);
  }


  deleteBtn = (id:any) => {
    let data:any = {
      "id":id
    }
  }
}
