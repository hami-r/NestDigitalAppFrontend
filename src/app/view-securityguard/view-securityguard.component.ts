import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-securityguard',
  templateUrl: './view-securityguard.component.html',
  styleUrls: ['./view-securityguard.component.css']
})
export class ViewSecurityguardComponent {
  constructor(private api:ApiService){
    this.api.viewSecGuard().subscribe(
      (response:any) => {
        this.secguards=response
      }
    )
  }
  secguards:any = []
}
