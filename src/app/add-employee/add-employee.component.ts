import { Component } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  employeeCode = ""
  name = ""
  designation = ""
  email = ""
  phoneNo = ""
  username = ""
  password = ""

  readValues = () => {
    let employee:any = {
      "employeeCode":this.employeeCode,
      "name":this.name,
      "designation":this.designation,
      "email":this.email,
      "phoneNo":this.phoneNo,
      "username":this.username,
      "password":this.password
    }
    console.log(employee);
  }
}
