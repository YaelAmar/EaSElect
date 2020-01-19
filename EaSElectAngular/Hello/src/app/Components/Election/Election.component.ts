import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-election',
    templateUrl: './election.component.html',
    styleUrls: ['./election.component.css']
  })
  export class ElectionComponent {
  electionId:number;
 
  ngOnInit()
  {

  }
  OnElectionAdded(electionId)
  {
    console.log(this.electionId+"  "+electionId)
   this.electionId=electionId;
   console.log(this.electionId+"  "+electionId)

  }
  getElectionId()
  {
    return this.electionId;
  }
}