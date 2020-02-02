import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Election } from '../../Models/election.model';
import { ElectionService } from '../../Services/election.service';

@Component({
    selector: 'app-editElectionDetails',
    templateUrl: './EditElectionDetails.component.html',
    styleUrls: ['./EditElectionDetails.component.css']
  })
  export class EditElectionDetailsComponent {
 
    @Input() electionToEdit:Election=new Election()
 
    constructor(private electionService:ElectionService){}

  EditElection(){
    console.log(this.electionToEdit.CompanyId,this.electionToEdit.ElectionName,this.electionToEdit.StartDate,this.electionToEdit.EndDate);
      this.electionService.EditElection(this.electionToEdit).subscribe()
    
  }
}
