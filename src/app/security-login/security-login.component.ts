import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-security-login',
  templateUrl: './security-login.component.html',
  styleUrls: ['./security-login.component.css']
})
export class SecurityLoginComponent {
  constructor(private api:ApiService,private route:Router){}
  username = ""
  password = ""
  
  readValues = ()=>{
    let data:any = {
      "username":this.username,
      "password":this.password
    }
    console.log(data);
    this.api.securityGuardLogin(data).subscribe(
      (response:any) => {
        localStorage.setItem("secId",response.secId)
        if(response.status == "success"){
          this.route.navigate(['/viewSecGuardProfile'])
        }else {
          alert("Invalid credentials")
        }
      }
    )
  }
}
