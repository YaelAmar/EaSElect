import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { ResultOfOption } from '../../Models/resultOfOption';
import { Type } from '../../Models/type.model';
//import { TypeDetailsService } from '../../Services/typeDetails.service';
import { TypeDetails } from '../../Models/typeDetails.model';
import { TypeDetailsService } from '../../Services/typeDetails.service';
import { ElectionResultService } from '../../Services/electionResult.service';

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
 resultOptionByType: ResultOfOption[]=[]
index:number=0
indexData:number=0
sum: ResultOfOption[][]=[];
   c:number=0
   results:number[]=[]
 public typeDetailsList:TypeDetails[]

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  
  // public barChartData: ChartDataSets[] = [{data:[5,4,345,6,7],label:"זכר"},{data:[4,5,67,8,7],label:"נקבה"}]
  public barChartData: ChartDataSets[] = [{data:[],label:""}];
  constructor(private typeDetailsService:TypeDetailsService,private electionResultService:ElectionResultService) { }

  ngOnInit() {
    this.selectedType=this.type
    console.log(this.selectedType)
    debugger
    this.resultOfOptionList= this.options
    //מביא את פרטי הסווג של הסיוג שנבחר
    this.typeDetailsService.Get(this.selectedType.TypeId).subscribe(typeDetailsList1=>
      {
       this.typeDetailsList=typeDetailsList1
       console.log(this.typeDetailsList)
      });
      for(let i=0;i<this.resultOfOptionList.length;i++)
       {
         let electionOptionId=this.resultOfOptionList[i].ElectionOptionId
         console.log(this.resultOfOptionList[i].ElectionOptionName)
        //מביא את כמה הצביעו מכל אופציה עבור הסיווג שנבחר
        this.electionResultService.GetResultOptionByType(this.selectedType.TypeId,electionOptionId).subscribe(resultOptionByType=>
               {
                this.resultOptionByType=resultOptionByType
                this.sum[this.index++]=this.resultOptionByType
                this.barChartLabels[i]=this.resultOfOptionList[i].ElectionOptionName;
                 console.log(this.sum)
                console.log(this.sum)
               if(this.sum.length==this.resultOfOptionList.length)
                        this.fillData(this.sum);
              }); 
             
        }
      
    
   }
   fillData(sum:ResultOfOption[][])
   {
    for(let k=0;k<this.typeDetailsList.length;k++)
    {
      this.results=[]
        console.log(this.typeDetailsList[k].TypeDetailsName)
        for(let i=0;i<sum.length;i++)
           for(let j=0;j<sum[i].length;j++)
              {
                if(sum[i][j].ElectionOptionId==this.typeDetailsList[k].TypeDetailsId)
                       this.results[this.c++]=sum[i][j].CountOfChoose;
              }
         console.log(this.typeDetailsList[k].TypeDetailsName)
         console.log(this.results)
         this.barChartData[this.indexData]={data:[],label:""};
         this.barChartData[this.indexData++]={data:this.results,label:this.typeDetailsList[k].TypeDetailsName}
         console.log(this.barChartData)
          }
   }
}
