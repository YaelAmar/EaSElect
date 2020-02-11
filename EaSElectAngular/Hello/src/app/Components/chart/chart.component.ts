import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { ResultOfOption } from '../../Models/resultOfOption';
import { Type } from '../../Models/type.model';
//import { TypeDetailsService } from '../../Services/typeDetails.service';
import { TypeDetails } from '../../Models/typeDetails.model';
import { TypeDetailsService } from '../../Services/typeDetails.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

 @Input() type:Type
 @Input() options:ResultOfOption[]
 selectedType:Type
 resultOfOptionList:ResultOfOption[]
 typeDetailsList:TypeDetails[]
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

  constructor(private typeDetailsService:TypeDetailsService) { }

  ngOnInit() {
    this.selectedType=this.type
  this.resultOfOptionList= this.options
  console.log(this.selectedType)
  debugger
 this.getAllOptions()
  }
  
  getAllOptions()
  {
   for(let i=0;i<this.resultOfOptionList.length;i++)
    {
     this.barChartLabels[i]=this.resultOfOptionList[i].ElectionOptionName;
     //מביא את פרטי הסווג של הסיוג שנבחר
     this.typeDetailsService.Get(this.type.TypeId).subscribe(typeDetailList=>{
        this.typeDetailsList=typeDetailList
        console.log(this.typeDetailsList)
     })
     
     //this.barChartData[i].label=this.resultOfOptionList[i].CountOfChoose;
       }
       console.log(this.barChartLabels)
       console.log(this.barChartData)
   }
}
