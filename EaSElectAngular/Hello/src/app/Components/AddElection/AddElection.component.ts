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
  
  startTime1 = {hour: 0, minute: 8};
  endTime1={hour:0,minute:22}
  startDate1:Date
  endDate1:Date
    constructor(private electionService:ElectionService){
    }
  
   ngOnInit()
   {
    this.newElection.CompanyId=+sessionStorage.getItem('companyId');
   }
   AddElection(frm:any){
    this.newElection.StartDate=new Date(this.startDate1.getFullYear(),this.startDate1.getMonth(),this.startDate1.getDay(),this.startTime1.minute,this.startTime1.hour)  
    this.newElection.EndDate=new Date(this.endDate1.getFullYear(),this.endDate1.getMonth(),this.endDate1.getDay(),this.endTime1.minute,this.endTime1.hour)  
    
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