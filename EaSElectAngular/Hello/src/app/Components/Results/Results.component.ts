
import { Component } from '@angular/core';
import { LogIn } from '../../Models/Login.model';
import { CompanyService } from '../../Services/company.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Election } from '../../Models/election.model';



@Component({
    selector: 'app-Results',
    templateUrl: './Results.component.html',
    styleUrls: ['./Results.component.css']
  })
  
  export class ResultsComponent {
    electionResult:Election=new Election()
   ngOnInit(){
    sessionStorage.setItem('enter','3');
  this.electionResult.ElectionId=+ sessionStorage.getItem('electionResult')
  console.log(this.electionResult)
   }
}