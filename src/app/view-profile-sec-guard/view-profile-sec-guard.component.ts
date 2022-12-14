import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-profile-sec-guard',
  templateUrl: './view-profile-sec-guard.component.html',
  styleUrls: ['./view-profile-sec-guard.component.css']
})
export class ViewProfileSecGuardComponent {
  secId:any = ""
  fetchedData:any = []

  constructor(private api:ApiService){
    this.secId = localStorage.getItem("secId")
    console.log(this.secId);
    let data:any = {
      "id":this.secId
    }
    console.log(data);
    
    this.api.viewSecGuardProfile(data).subscribe(
      (response:any) => {
        this.fetchedData=response
      }
    )
  }
}
