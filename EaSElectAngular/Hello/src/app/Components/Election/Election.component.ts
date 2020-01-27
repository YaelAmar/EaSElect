import { Component } from "@angular/core";

@Component({
    selector: 'app-election',
    templateUrl: './election.component.html',
    styleUrls: ['./election.component.css']
  })
  export class ElectionComponent {
  electionId:number;
 isElelctionAdded:boolean
 companyId:number
  ngOnInit()
  {
    this.companyId=+sessionStorage.getItem('companyId');

  }
  OnElectionAdded(electionId)
  {
   this.electionId=electionId;
  }
  OnElectionOptionAdded(isElelctionAdded:boolean){
    this.isElelctionAdded=isElelctionAdded;
  }
}