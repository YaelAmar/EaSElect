
import { Component } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { ElectionService } from '../../Services/election.service';
import { Election } from '../../Models/election.model';
import { ElectionOption } from '../../Models/electionOption.model';
import { ElectionOptionService } from '../../Services/electionOption.service';
import { CompanyService } from '../../Services/company.service';
import { ValueToTypeService } from '../../Services/valueToType.service';
import { TypeDetails } from '../../Models/typeDetails.model';
import { ElectionResultService } from '../../Services/electionResult.service';



@Component({
    selector: 'app-voterDetails',
    templateUrl: './VoterDetails.component.html',
    styleUrls: ['./VoterDetails.component.css']
  })
  
  export class VoterDetailsComponent {
   subscribe: any;
   selectedOptionItem:ElectionOption=new ElectionOption()// בחורה אופציה
   companyName:string
   voterCode:number
   typeDetailsList:TypeDetails[]
   finish:boolean=false
  constructor(private electionOptionService:ElectionOptionService ,private companyService:CompanyService,
              private valueToTypeService:ValueToTypeService, private eletionResultService:ElectionResultService,
              private router:Router, private route:ActivatedRoute){
     }
     ngOnInit()
      {
        this.subscribe = this.route.paramMap.subscribe(params => {
        this.selectedOptionItem.ElectionOptionId= +params.get("id") });
        sessionStorage.setItem('enter','0');
      

      this.getCompanyName();//מחזיר את החברה שבה נמצא עכשיו
      this.GetValueToTypeOfCurrentVoter();//מחזיר את הערכי סווג של בוחר זה

     
      }
     
  GetValueToTypeOfCurrentVoter() {
    this.voterCode=+sessionStorage.getItem('voterCode');
   this.valueToTypeService.GetValueToTypeOfVoter(this.voterCode).subscribe(typeDetailsIdList=>
    {
      if(typeDetailsIdList==null)
         console.log("אין סיווג")
     this.typeDetailsList=typeDetailsIdList
  })
  }
  

  changeChoose(){
    sessionStorage.setItem('enter','0');
    this.electionOptionService.GetElectionIdByElectionOptionId(this.selectedOptionItem.ElectionOptionId).subscribe(electionId=>
      {
        this.selectedOptionItem.ElectionId=electionId
        this.router.navigate(['/ChooseVoter',this.selectedOptionItem.ElectionId])
      })
  }
  getCompanyName()
  {
    let companyId:number=+sessionStorage.getItem('companyId');
    this.companyService.GetCompanyNameById(companyId).subscribe(companyName=>{
    this.companyName=companyName;
    });
  }
  emptyCheckBox(typeDetail:TypeDetails,checked1:boolean){
       this.valueToTypeService.DeleteValueToType(this.voterCode,typeDetail.TypeDetailsId,checked1).subscribe();
  }
  sendResult(){
    this.eletionResultService.sendChoose(this.voterCode,this.selectedOptionItem.ElectionOptionId).subscribe();
    this.finish=true

  }
}