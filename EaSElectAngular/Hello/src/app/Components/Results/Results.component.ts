
import { Component,AfterViewInit, ViewChild } from '@angular/core';
import { Election } from '../../Models/election.model';
import { ElectionOptionService } from '../../Services/electionOption.service';
import { ElectionResultService } from '../../Services/electionResult.service';
import { ResultOfOption } from '../../Models/resultOfOption';
import { ChartComponent } from '../chart/chart.component';
import { ActivatedRoute } from '@angular/router';
import { ElectionService } from '../../Services/election.service';
import { Type } from '../../Models/type.model';
import { TypeService } from '../../Services/type.service';
 
@Component({
    selector: 'app-Results',
    templateUrl: './Results.component.html',
    styleUrls: ['./Results.component.css']
  })
  
  export class ResultsComponent {
    electionResults:Election=new Election()
    electionName:string
    resultOfOption:ResultOfOption[]
    types:Type[]=[]
    selectedType:Type
    dateNow=new Date();
d:Date
     constructor(private route:ActivatedRoute,private electionService:ElectionService,private typeService:TypeService,
      private electionOptionService:ElectionOptionService,private electionResultService:ElectionResultService){
    }

   ngOnInit(){
    sessionStorage.setItem('enter','3');
   
    this.route.params.subscribe(e=>
      {
         this.electionResults.ElectionId=e.id;
         if(sessionStorage.getItem('electionResult')!=e.id)
         {
            sessionStorage.setItem('electionResult',e.id.toString())
         }
         this.getResult();
         this.getElectionName();
         this.getTypes();
      })

      this.d=new Date(this.electionResults.EndDate)
      // if(this.d<=this.dateNow)
      // console.log("VVVVVVVVVVVVVVVVVVVVVVVVVVVV")
      // else
      // console.log("XXXXXXXXXXXXXXXXXXX")
     }
    
    

     getResult(){
      this.electionResultService.GetResult(this.electionResults.ElectionId).subscribe(list=>
        {
          this.resultOfOption=list;
        })
     }
     getElectionName(){
      this.electionService.GetElectionByCode(this.electionResults.ElectionId).subscribe(election=>{
        this.electionName=election.ElectionName;
      })
     }
     getTypes(){
      this.typeService.Get(this.electionResults.ElectionId).subscribe(typeList=>
        {
         this.types=typeList;
         this.selectedType=new Type()
         this.selectedType=this.types[2]
        })
    }
    
    selectType(type:Type)
    {
      this.selectedType=new Type()
      this.selectedType=type
    } 
   
  }
