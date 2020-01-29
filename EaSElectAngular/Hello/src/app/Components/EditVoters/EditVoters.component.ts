import { Component, Input } from "@angular/core";
import { Election } from '../../Models/election.model';

@Component({
    selector: 'app-editVoters',
    templateUrl: './editVoters.component.html',
    styleUrls: ['./editVoters.component.css']
  })
  export class EditVotersComponent {
    electionToEdit:number
  ngOnInit()
  {
    this.electionToEdit=+sessionStorage.getItem('electionToEdit')
    console.log(this.electionToEdit)
    
  }
 
}