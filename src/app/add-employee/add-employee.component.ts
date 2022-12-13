import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  constructor(private api:ApiService){}
  employeeCode = ""
  name = ""
  designation = ""
  email = ""
  phoneNo = ""
  salary = ""
  username = ""
  password = ""

  readValues = () => {
    let employee:any = {
      "employeeCode":this.employeeCode,
      "name":this.name,
      "designation":this.designation,
      "email":this.email,
      "phoneNo":this.phoneNo,
      "salary":this.salary,
      "username":this.username,
      "password":this.password
    }
    console.log(employee);
    this.api.addEmployee(employee).subscribe(
      (response:any) => {
        console.log(response);
        if(response.status == "success"){
          alert("Added Successfully")
          this.employeeCode = ""
          this.name = ""
          this.designation = ""
          this.email = ""
          this.phoneNo = ""
          this.salary = ""
          this.username = ""
          this.password = ""
        }else {
          alert("Something went wrong")
        }
      }
    )
  }
}
