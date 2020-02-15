import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { ResultOfOption } from '../../Models/resultOfOption';
import { Type } from '../../Models/type.model';
//import { TypeDetailsService } from '../../Services/typeDetails.service';
import { TypeDetails } from '../../Models/typeDetails.model';
import { TypeDetailsService } from '../../Services/typeDetails.service';
import { ElectionResultService } from '../../Services/electionResult.service';
import { ResultOfOptionByTypeDetails } from '../../Models/ResultOfOptionByTypeDetails.model';
import { bindCallback } from 'rxjs';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit,OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    debugger
    if('type' in changes||'options' in changes)
    this.ngOnInit();

   
  }

 @Input() type:Type
 @Input() options:ResultOfOption[]
 selectedType:Type
 resultOfOptionList:ResultOfOption[]
 resultOptionByType: ResultOfOption[]=[]
index:number=0
   resultOfOptionByTypeDetails:ResultOfOptionByTypeDetails[]
 public typeDetailsList:TypeDetails[]

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData: ChartDataSets[] = [{data:[],label:""}];
public chartColor:Color[]=[
  { backgroundColor:'red'},
  {backgroundColor:'blue'},
  {backgroundColor:'green'},
  {backgroundColor:'yellow'},
  {backgroundColor:'pink'},
  {backgroundColor:'orange'},
  {backgroundColor:'purple'},
  {backgroundColor:'brown'},
  {backgroundColor:'aqua'},
  {backgroundColor:'blueviolet'},
  {backgroundColor:'chartreuse'},
  {backgroundColor:'chocolate'},
  {backgroundColor:'darksalmon'},
  {backgroundColor:'deepink'},
  {backgroundColor:'gold'}

];
  constructor(private typeDetailsService:TypeDetailsService,private electionResultService:ElectionResultService) { }

  ngOnInit() {
  this.changeType(this.selectedType)
    
   }


   
   changeType(selectedType:Type)
   {
    this.selectedType=this.type
    console.log(this.selectedType)
    debugger
    this.resultOfOptionList= this.options
    for(let i=0;i<this.resultOfOptionList.length;i++)
{
  this.barChartLabels[i]=this.resultOfOptionList[i].ElectionOptionName

}
    //מביא את פרטי הסווג של הסיוג שנבחר
    this.typeDetailsService.Get(this.selectedType.TypeId).subscribe(typeDetailsList1=>
      {
       this.typeDetailsList=typeDetailsList1
      });
     this.electionResultService.GetResultByType(this.selectedType.TypeId,this.resultOfOptionList).subscribe(result=>
      {
        for(let i=0;i<result.length;i++)
           {
            this.barChartData[this.index++]={data:result[i].AmountTypeOfOption,label:result[i].TypeDetail.TypeDetailsName,backgroundColor:this.chartColor[i].backgroundColor}
           }
     
      })
    
   }  
}
