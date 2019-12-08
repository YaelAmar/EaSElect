import { Component } from "@angular/core";
import { Election } from "../../Models/election.model";
import { ElectionService } from "../../Services/election.service";

@Component({
    selector: 'app-add-election',
    templateUrl: './addElection.component.html',
    styleUrls: ['./addElection.component.css']
  })
  export class AddElectionComponent {
    election:Election=new Election();
    subscribe:any;
    dateNow=new Date();
    constructor(private  electionService:ElectionService){
    }
  
   ngOnInit()
   {
  
   }
   AddElection(frm:any){
   
    frm.method = "POST";   
    document.body.appendChild(frm);
    this.subscribe=this.electionService.AddNewElection(this.election.ElectionName,this.election.StartDate,this.election.EndDate,this.election.CompanyId);
   }
}