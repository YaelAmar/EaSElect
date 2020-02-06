
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
      sessionStorage.setItem('enter','3');
       this.election.ElectionId=+sessionStorage.getItem('electionToEdit')
       this.searchElection();
      }
      
   
   searchElection(){
    this.companyId=+sessionStorage.getItem('companyId')
    this.electionService.GetAllElections(this.companyId).subscribe((list:Election[])=>
    {
      this.ElectionsList=list;
      for(let item of this.ElectionsList)
          {
          if(new Date(item.StartDate)<new Date()&&new Date(item.EndDate)>new Date()) 
            {
               this.election=item
               console.log(new Date(item.StartDate))
               console.log(new Date(item.EndDate))
               
               console.log(this.election.ElectionId)
               sessionStorage.setItem('electionToEdit',this.election.ElectionId.toString())
            }
          }
      });
    }
  }
     
     
   
