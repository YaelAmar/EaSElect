import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Election } from '../../Models/election.model';
import { ElectionService } from '../../Services/election.service';
import { Time } from '../../Models/time.model';

@Component({
    selector: 'app-editElectionDetails',
    templateUrl: './EditElectionDetails.component.html',
    styleUrls: ['./EditElectionDetails.component.css']
  })
  export class EditElectionDetailsComponent {
 
    electionToEdit:Election=new Election()
    startTime1:Time =new Time()
       endTime1:Time=new Time()
    startDate1:Date=new Date()
    endDate1:Date=new Date()
    constructor(private electionService:ElectionService){}
ngOnInit()
{
  
  //debugger
  this.electionToEdit.ElectionId=+sessionStorage.getItem('electionToEdit');
  this.electionService.GetElectionByCode(this.electionToEdit.ElectionId).subscribe(election=>{
    this.electionToEdit=election 
  //  debugger
   console.log("----------------------"+this.electionToEdit)
    this.startDate1=this.electionToEdit.StartDate
    this.endDate1=this.electionToEdit.EndDate
    this.startTime1.hour=this.startDate1.getHours()
    this.startTime1.minute=this.startDate1.getMinutes()
    this.endTime1.hour=this.endDate1.getUTCHours()
    this.endTime1.minute=this.endDate1.getMinutes()
    //this.electionToEdit.StartDate=new Date(this.startDate1.getFullYear(),this.startDate1.getMonth(),this.startDate1.getDate(),this.startTime1.hour,this.startTime1.minute)  
   // this.electionToEdit.EndDate=new Date(this.endDate1.getFullYear(),this.endDate1.getMonth(),this.endDate1.getDate(),this.endTime1.hour,this.endTime1.minute)  
    console.log(this.electionToEdit)
    
  })
 
}
  EditElection(frm:any){
  
      this.electionService.EditElection(this.electionToEdit).subscribe()
      console.log(this.electionToEdit.CompanyId,this.electionToEdit.ElectionName,this.electionToEdit.StartDate,this.electionToEdit.EndDate);
    
  }
}
