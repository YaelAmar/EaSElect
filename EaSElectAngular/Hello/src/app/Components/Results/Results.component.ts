
import { Component } from '@angular/core';
import { LogIn } from '../../Models/Login.model';
import { CompanyService } from '../../Services/company.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Election } from '../../Models/election.model';
import { ElectionOptionService } from '../../Services/electionOption.service';
import { ElectionOption } from '../../Models/electionOption.model';
import { ElectionResultService } from '../../Services/electionResult.service';
import { ElectionResult } from '../../Models/electionResult.model';
 


@Component({
    selector: 'app-Results',
    templateUrl: './Results.component.html',
    styleUrls: ['./Results.component.css']
  })
  
  export class ResultsComponent {
    electionResults:Election=new Election()
    electionOptionList:ElectionOption[]
    resultList:ElectionResult[]
    constructor(private electionOptionService:ElectionOptionService,private electionResultService:ElectionResultService){

    }
   ngOnInit(){
 
    sessionStorage.setItem('enter','3');
    this.electionResults.ElectionId=+ sessionStorage.getItem('electionResult')
    console.log(this.electionResults)

     this.electionOptionService.GetAllElectionOption(this.electionResults.ElectionId).subscribe(list=>{
       this.electionOptionList=list;
       console.log(this.electionOptionList)
     })

     this.electionResultService.GetResult(this.electionOptionList).subscribe(list=>
      {
       this.resultList=list;
       console.log(this.resultList)
     });
   }
}