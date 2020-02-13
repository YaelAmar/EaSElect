
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
    resultOfOption:ResultOfOption[]=[]
    types:Type[]=[]
    selectedType:Type
     constructor(private route:ActivatedRoute,private electionService:ElectionService,private typeService:TypeService,
      private electionOptionService:ElectionOptionService,private electionResultService:ElectionResultService){
    }
   ngOnInit(){
     debugger
    sessionStorage.setItem('enter','3');

    this.route.params.subscribe(e=>
      {
         this.electionResults.ElectionId=e.id;
         if(sessionStorage.getItem('electionResult')!=e.id)
         {
            sessionStorage.setItem('electionResult',e.id.toString())
         }
      })
    this.getResult();
    this.getElectionName();
    this.getTypes();
     }
    
     getResult(){
      this.electionResultService.GetResult(this.electionResults.ElectionId).subscribe(list=>
        {
          this.resultOfOption=list;
          console.log(this.resultOfOption)
        })
     }
     getElectionName(){
      this.electionService.GetElectionByCode(this.electionResults.ElectionId).subscribe(election=>{
        this.electionName=election.ElectionName;
        console.log(this.electionName)
      })
     }
     getTypes(){
      this.typeService.Get(this.electionResults.ElectionId).subscribe(typeList=>
        {
          debugger
          this.types=typeList;
          this.selectedType=new Type()
          this.selectedType=this.types[0]
          console.log(this.types)
        })
    }

    selectType(type:Type)
    {
      debugger
      this.selectedType=new Type()
      console.log(type)
      this.selectedType=type
    } 
  }
