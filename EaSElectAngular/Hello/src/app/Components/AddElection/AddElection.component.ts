import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { Election } from "../../Models/election.model";
import { ElectionService } from "../../Services/election.service";
import { Subscription } from "rxjs/Subscription";
import {ActivatedRoute, Router } from "@angular/router";


@Component({
    selector: 'app-add-election',
    templateUrl: './addElection.component.html',
    styleUrls: ['./addElection.component.css']
  })
  export class AddElectionComponent implements OnInit,OnDestroy  {
    newElection:Election=new Election();
    subscribe:any;
    dateNow=new Date();
    subscripion:Subscription

    constructor(private  electionService:ElectionService,private route: ActivatedRoute,private router:Router){
    }
  
   ngOnInit()
   {
    this.subscripion=this.route.params.subscribe((params:any)=>{ 
      console.log(params['id'])
      this.newElection.CompanyId=params['id']
    });
   }
   AddElection(frm:any){
      console.log(this.newElection.CompanyId,this.newElection.ElectionName,this.newElection.StartDate,this.newElection.EndDate);
      this.electionService.AddNewElection(this.newElection).subscribe(electionId=>{
      this.newElection.ElectionId=electionId;
       if(electionId!=0)
       {
         console.log("succesfuly");
         sessionStorage.setItem('whichPage', '2');
         const electionIdString =electionId+"";
         sessionStorage.setItem('electionIdNum', 'electionIdString');
     //    this.router.navigate(['/AddElectionOption',electionId]);
       }
     else 
     console.log("בחירות אלו כבר קיימות במערכת")
  
      });
   }
   ngOnDestroy()
   {
    this.subscripion.unsubscribe();
   }
}