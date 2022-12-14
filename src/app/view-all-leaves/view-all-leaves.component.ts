import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-all-leaves',
  templateUrl: './view-all-leaves.component.html',
  styleUrls: ['./view-all-leaves.component.css']
})
export class ViewAllLeavesComponent {
  constructor(private api:ApiService){
    this.api.viewAllLeaves().subscribe(
      (response:any) => {
        this.data=response
      }
    )
  }
  data:any = []
  
 
}
