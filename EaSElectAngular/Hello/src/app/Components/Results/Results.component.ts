
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
import { ResultOfOption } from '../../Models/resultOfOption';
 


@Component({
    selector: 'app-Results',
    templateUrl: './Results.component.html',
    styleUrls: ['./Results.component.css']
  })
  
  export class ResultsComponent {
    electionResults:Election=new Election()
    // electionOptionList:ElectionOption[]
    // resultIdsList:ElectionResult[]
    resultOfOption:ResultOfOption[]
    constructor(private electionOptionService:ElectionOptionService,private electionResultService:ElectionResultService){

    }
   ngOnInit(){
    sessionStorage.setItem('enter','3');
    this.electionResults.ElectionId=+ sessionStorage.getItem('electionResult')
    console.log(this.electionResults)

      //  this.electionOptionService.GetAllElectionOption(this.electionResults.ElectionId).subscribe(list=>{
      //  this.electionOptionList=list;
      //  console.log(this.electionOptionList)
      //  for(let i=0; i<this.electionOptionList.length;i++)
      //  {
          this.electionResultService.GetResult(this.electionResults.ElectionId).subscribe(list=>
          {
            this.resultOfOption=list;
    console.log(this.resultOfOption)

          })
       }
      

   }
