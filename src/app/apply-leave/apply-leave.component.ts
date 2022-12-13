import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent {
  constructor(private api:ApiService){
    this.api.viewAllPendingLeaves().subscribe(
      (response:any) => {
        this.data=response
      }
    )
  }
  data:any = []
}
