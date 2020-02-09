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
 
    startDate1:Date=new Date()
    endDate1:Date=new Date()

    startTime1
    endTime1
 
    constructor(private electionService:ElectionService){}
   ngOnInit()
   {
    this.electionToEdit.ElectionId=+sessionStorage.getItem('electionToEdit');
    this.electionService.GetElectionByCode(this.electionToEdit.ElectionId).subscribe(election=>{
    this.electionToEdit=election
    this.startDate1=new Date( this.electionToEdit.StartDate)
    this.endDate1=new Date(this.electionToEdit.EndDate)
    this.startTime1={hour:this.startDate1.getHours(),minute:this.startDate1.getMinutes()};
    this.endTime1={hour:this.endDate1.getHours(),minute:this.endDate1.getMinutes()};

  
  })
 
}
  EditElection(frm:any){
  
      this.electionService.EditElection(this.electionToEdit).subscribe()
      console.log(this.electionToEdit.CompanyId,this.electionToEdit.ElectionName,this.electionToEdit.StartDate,this.electionToEdit.EndDate);
    
  }
}
