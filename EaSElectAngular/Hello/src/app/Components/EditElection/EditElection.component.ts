
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';



@Component({
    selector: 'app-editElection',
    templateUrl: './EditElection.component.html',
    styleUrls: ['./EditElection.component.css']
  })
  
  export class EditElectionComponent {
    subscripion:Subscription
    companyId:number
   constructor(private router:Router,private route:ActivatedRoute){
     }
  ngOnInit()
  {
    this.subscripion=this.route.params.subscribe((params:any)=>{ 
      console.log(params['id'])
      this.companyId=params['id']
    });
  
  }
}