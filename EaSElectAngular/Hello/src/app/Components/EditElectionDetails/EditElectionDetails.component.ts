import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Election } from '../../Models/election.model';

@Component({
    selector: 'app-editElectionDetails',
    templateUrl: './EditElectionDetails.component.html',
    styleUrls: ['./EditElectionDetails.component.css']
  })
  export class EditElectionDetailsComponent {
 
    @Input() electionToEdit:Election=new Election()
  ngOnInit()
  {
    
    console.log(this.electionToEdit)
  }

}
