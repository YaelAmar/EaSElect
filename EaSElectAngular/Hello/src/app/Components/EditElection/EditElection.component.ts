
import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Election } from '../../Models/election.model';
import { ElectionService } from '../../Services/election.service';
import { EditElectionDetailsComponent } from '../EditElectionDetails/EditElectionDetails.component';




@Component({
    selector: 'app-editElection',
    templateUrl: './editElection.component.html',
    styleUrls: ['./editElection.component.css']
  })
  
  export class EditElectionComponent {

    companyId:number
    ElectionsList: Election[];
    election:Election=new Election();
    constructor(private router:Router,private route:ActivatedRoute,private electionService:ElectionService){
     }
  ngOnInit()
  {
      this.companyId=+sessionStorage.getItem('companyId')
      this.electionService.GetAllElections(this.companyId).subscribe((list:Election[])=>
      {
        this.ElectionsList=list;
        var minDate:Date=new Date();
        var currentDate:Date=new Date()
        for(let item of this.ElectionsList)
            {
            var tmp=new Date(item.StartDate);
         //   if(tmp>currentDate)
               {
                 this.election=item
                 debugger
                 sessionStorage.setItem('electionToEdit',this.election.ElectionId.toString())
               }
            }
      });
   }
   }
     
     
   
