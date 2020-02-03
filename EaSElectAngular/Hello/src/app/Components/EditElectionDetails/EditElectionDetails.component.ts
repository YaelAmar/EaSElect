import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Election } from '../../Models/election.model';
import { ElectionService } from '../../Services/election.service';

@Component({
    selector: 'app-editElectionDetails',
    templateUrl: './EditElectionDetails.component.html',
    styleUrls: ['./EditElectionDetails.component.css']
  })
  export class EditElectionDetailsComponent {
 
    electionToEdit:Election=new Election()
    startTime1 = {hour: 0, minute: 8};
    endTime1={hour:0,minute:22}
    startDate1:Date
    endDate1:Date
    constructor(private electionService:ElectionService){}
ngOnInit()
{
  debugger
  this.electionToEdit.ElectionId=+sessionStorage.getItem('electionToEdit');
  this.electionService.GetElectionByCode(this.electionToEdit.ElectionId).subscribe(election=>{
    this.electionToEdit=election 
    debugger
    console.log(this.electionToEdit)
    this.startDate1=this.electionToEdit.StartDate
    this.endDate1=this.electionToEdit.EndDate
    this.startTime1.hour=this.electionToEdit.StartDate.getHours()
    this.startTime1.minute=this.electionToEdit.StartDate.getMinutes()
    this.endTime1.hour=this.electionToEdit.EndDate.getHours()
    this.endTime1.minute=this.electionToEdit.EndDate.getMinutes()
    this.electionToEdit.StartDate=new Date(this.startDate1.getFullYear(),this.startDate1.getMonth(),this.startDate1.getDay(),this.startTime1.minute,this.startTime1.hour)  
    this.electionToEdit.EndDate=new Date(this.endDate1.getFullYear(),this.endDate1.getMonth(),this.endDate1.getDay(),this.endTime1.minute,this.endTime1.hour)  
    console.log(this.electionToEdit)
    
  })
 
}
  EditElection(frm:any){
  
    console.log(this.electionToEdit.CompanyId,this.electionToEdit.ElectionName,this.electionToEdit.StartDate,this.electionToEdit.EndDate);
      this.electionService.EditElection(this.electionToEdit).subscribe()
    
  }
}
