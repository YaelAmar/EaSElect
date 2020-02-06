
import { Component } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { ElectionService } from '../../Services/election.service';
import { Election } from '../../Models/election.model';
import { ElectionOption } from '../../Models/electionOption.model';
import { ElectionOptionService } from '../../Services/electionOption.service';



@Component({
    selector: 'app-chooseVoter',
    templateUrl: './ChooseVoter.component.html',
    styleUrls: ['./ChooseVoter.component.css']
  })
  
  export class ChooseVoterComponent {
   electionId:number
  subscribe: any;
  electionOptions:ElectionOption[]
  selectedOptionItem:ElectionOption//=new ElectionOption()
   constructor(private electionOptionService:ElectionOptionService, private router:Router,private route:ActivatedRoute){
     }
  ngOnInit()
  {
    sessionStorage.setItem('enter','0');
 
    this.subscribe = this.route.paramMap.subscribe(params => {
      this.electionId = +params.get("id") });
      console.log(this.electionId)

    this.electionOptionService.GetAllElectionOption(this.electionId).subscribe(electionOptions=>
    {
        this.electionOptions=electionOptions;
        console.log(this.electionOptions)
    }
 
  );
  }
  selectedOption(electionOption:ElectionOption)
  {
    this.selectedOptionItem=new ElectionOption()
    console.log(electionOption);
    this.selectedOptionItem=electionOption
  }
  next(){
    sessionStorage.setItem('enter','0');

     this.router.navigate(['/VoterDetails',this.selectedOptionItem.ElectionOptionId])
 
    }
 
}