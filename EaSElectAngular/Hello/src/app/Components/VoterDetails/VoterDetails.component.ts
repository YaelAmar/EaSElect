
import { Component } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { ElectionService } from '../../Services/election.service';
import { Election } from '../../Models/election.model';
import { ElectionOption } from '../../Models/electionOption.model';
import { ElectionOptionService } from '../../Services/electionOption.service';



@Component({
    selector: 'app-voterDetails',
    templateUrl: './VoterDetails.component.html',
    styleUrls: ['./VoterDetails.component.css']
  })
  
  export class VoterDetailsComponent {
   subscribe: any;
   selectedOptionItem:ElectionOption=new ElectionOption()// בחורה אופציה
   constructor(private electionOptionService:ElectionOptionService, private router:Router,private route:ActivatedRoute){
     }
     ngOnInit()
      {
       console.log(this.selectedOptionItem)

        sessionStorage.setItem('enter','0');
        this.subscribe = this.route.paramMap.subscribe(params => {
          this.selectedOptionItem.ElectionOptionId= +params.get("id") });
       
       console.log(this.selectedOptionItem)

        }
  

  changeChoose(){
    sessionStorage.setItem('enter','0');
    this.router.navigate(['/ChooseVoter',this.selectedOptionItem.ElectionId])

  }
}