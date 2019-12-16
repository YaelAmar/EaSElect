import { Component } from "@angular/core";
import { Election } from "../../Models/election.model";
import { ElectionService } from "../../Services/election.service";


@Component({
    selector: 'app-add-election',
    templateUrl: './addElection.component.html',
    styleUrls: ['./addElection.component.css']
  })
  export class AddElectionComponent {
    newElection:Election=new Election();
    subscribe:any;
    dateNow=new Date();
    constructor(private  electionService:ElectionService){
    }
  
   ngOnInit()
   {
  
   }
   AddElection(frm:any){
      this.electionService.AddNewElection(this.newElection.ElectionName,this.newElection.StartDate,this.newElection.EndDate,this.newElection.CompanyId).subscribe(res=>{
        this.newElection.ElectionId=res;
       // this.newElection.CompanyId=
      });
   }
}