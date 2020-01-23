
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Election } from '../../Models/election.model';

import { Subscription } from 'rxjs';
import { ElectionService } from '../../Services/election.service';
import { element } from 'protractor';



@Component({
    selector: 'app-menu',
    templateUrl: './Menu.component.html',
    styleUrls: ['./Menu.component.css']
  })
  
  export class MenuComponent {
    
    ElectionsList:Election[];  
    subscripion:Subscription
    companyId:number
    constructor(private router:Router,private route: ActivatedRoute,private electionService:ElectionService){
     
    }
 
    ngOnInit()
    {
     this.subscripion=this.route.params.subscribe((params:any)=>{ 
      console.log(params['id'])
      this.companyId=params['id']
    });
   this.electionService.GetAllElections(this.companyId).subscribe((list:Election[])=>{
   this.ElectionsList=list;
      });
   
  
  }

  SelectedElection(){
    //this.router.navigate();
  }

}