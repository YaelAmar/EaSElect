
import { Component } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { ElectionService } from '../../Services/election.service';
import { Election } from '../../Models/election.model';
import { VoterService } from '../../Services/voter.service';



@Component({
    selector: 'app-identifyVoter',
    templateUrl: './identifyVoter.component.html',
    styleUrls: ['./identifyVoter.component.css']
  })
  
  export class IdentifyVoterComponent {
   electionId:number
  subscribe: any;
  electionToChoose:Election=new Election();
  result:number=0
  //משתנה זה מחזיק:
  //1-בוחר לא קיים
  //2-בחירה לפני הזמן
  //3-בחירה אחרי זמן הבחירות
  //4-בחר כבר
  fingerPrint:string=""
  companyId:number
  voterCode: number;
   constructor(private electionService:ElectionService,private voterService:VoterService, private router:Router,private route:ActivatedRoute){
     }
  ngOnInit()
  {
      sessionStorage.setItem('enter','0');
      this.subscribe = this.route.paramMap.subscribe(params => {
      this.electionId = +params.get("id") });
debugger
      this.electionService.GetCompanyIdByElectionId(this.electionId).subscribe(companyId=>
        {
         this.companyId=companyId;
         sessionStorage.setItem('companyId',this.companyId.toString())
        });


     this.electionService.GetElectionByCode(this.electionId).subscribe(election=>
    {
        this.electionToChoose=election;
     
    }
 
  );
  }
RecognizeVoterFingerPrint(fingerPrint:string,electionId:number){
 
  this.voterService.GetVoterCodeByVoterIdInCurrentElection(fingerPrint,electionId).subscribe(voterCode=>
    {
       this.voterCode=voterCode;
       console.log(this.voterCode)
       sessionStorage.setItem('voterCode',this.voterCode.toString());
    });
  this.voterService.CheckVoter(fingerPrint,electionId).subscribe(result=>
    {
      this.result=result
      console.log(result)
      if(this.result==0)//בוחר בתנאים מתאימים ביחס לבוחר עצמו ולבחירות הנוכחיות
       {
         this.router.navigate(['ChooseVoter',this.electionId]);
       }     
    });
 
}
//
next(fingerPrint:string){
 this.RecognizeVoterFingerPrint(fingerPrint,this.electionId);
}
getFingerPrint(){
   this.fingerPrint="fg"
}
}