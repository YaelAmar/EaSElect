
import { Component } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { ElectionService } from '../../Services/election.service';
import { Election } from '../../Models/election.model';



@Component({
    selector: 'app-identifyVoter',
    templateUrl: './identifyVoter.component.html',
    styleUrls: ['./identifyVoter.component.css']
  })
  
  export class IdentifyVoterComponent {
   electionId:number
  subscribe: any;
  electionToChoose:Election=new Election();
  
   constructor(private electionService:ElectionService, private router:Router,private route:ActivatedRoute){
     }
  ngOnInit()
  {
      this.subscribe = this.route.paramMap.subscribe(params => {
      this.electionId = +params.get("id") });
      console.log(this.electionId)
  this.electionService.GetElectionByCode(this.electionId).subscribe(election=>
    {
        this.electionToChoose=election;
     
    }
 
  );
  }
RecognizeVoterFingerPrint(){
  this.router.navigate(['ChooseVoter',this.electionId]);
}
}