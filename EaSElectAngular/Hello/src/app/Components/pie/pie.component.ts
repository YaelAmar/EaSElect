import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';
import { ResultOfOption } from '../../Models/resultOfOption';
import { ElectionOptionService } from '../../Services/electionOption.service';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {
  resultOfOptionList:ResultOfOption[]=[]
   @Input() data:ResultOfOption[]

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[]=[]
  public pieChartData: SingleDataSet = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor(private electionOptionService:ElectionOptionService) { }

  ngOnInit()
  {

    this.resultOfOptionList=this.data
    console.log(this.resultOfOptionList)
    console.log(this.data)
    this.getAllOptions();
  }

  getAllOptions()
  {
   for(let i=0;i<this.resultOfOptionList.length;i++)
    {
     this.pieChartLabels[i]=this.resultOfOptionList[i].ElectionOptionName;
     this.pieChartData[i]=this.resultOfOptionList[i].CountOfChoose;
    }
   }


}
