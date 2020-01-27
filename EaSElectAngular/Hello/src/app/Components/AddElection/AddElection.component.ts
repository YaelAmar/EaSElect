import { Component, Output, EventEmitter } from "@angular/core";
import { Election } from "../../Models/election.model";
import { ElectionService } from "../../Services/election.service";
import { Subscription } from "rxjs/Subscription";

@Component({
    selector: 'app-add-election',
    templateUrl: './addElection.component.html',
    styleUrls: ['./addElection.component.css']
  })
  export class AddElectionComponent  {
    newElection:Election=new Election();
    subscribe:any;
    dateNow=new Date();
    subscripion:Subscription
   @Output() addElection=new EventEmitter<number>();
  

 
    constructor(private  electionService:ElectionService){
    }
  
   ngOnInit()
   {
    this.newElection.CompanyId=+sessionStorage.getItem('companyId');
   }
   AddElection(frm:any){
      console.log(this.newElection.CompanyId,this.newElection.ElectionName,this.newElection.StartDate,this.newElection.EndDate);
      this.electionService.AddNewElection(this.newElection).subscribe(electionId=>{
      this.newElection.ElectionId=electionId;
       if(electionId!=0)
       {
         this.addElection.emit(electionId);
       }
     else 
     console.log("בחירות אלו כבר קיימות במערכת")
  
      });
   }
}