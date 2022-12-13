import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-securityguard',
  templateUrl: './add-securityguard.component.html',
  styleUrls: ['./add-securityguard.component.css']
})
export class AddSecurityguardComponent {
  constructor(private api:ApiService){}
  employeeCode = ""
  name = ""
  email = ""
  phoneNo = ""
  salary = ""
  username = ""
  password = ""

  readValues = () => {
    let data:any = {
      "employeeCode":this.employeeCode,
      "name":this.name,
      "email":this.email,
      "phoneNo":this.phoneNo,
      "salary":this.salary,
      "username":this.username,
      "password":this.password
    }
    console.log(data);
    this.api.addSecGuard(data).subscribe(
      (response:any) => {
        console.log(response);
        if(response.status == "success"){
          alert("Added Successfully")
          this.employeeCode = ""
          this.name = ""
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
