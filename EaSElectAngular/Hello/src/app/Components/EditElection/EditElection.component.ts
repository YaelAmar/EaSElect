
import { Component, Output, EventEmitter, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Election } from '../../Models/election.model';
import { ElectionService } from '../../Services/election.service';
import { EditElectionDetailsComponent } from '../EditElectionDetails/EditElectionDetails.component';
import { EditElectionOptionsComponent } from '../EditElectionOptions/EditElectionOptions.component';
import { EditVotersComponent } from '../EditVoters/EditVoters.component';




@Component({
    selector: 'app-editElection',
    templateUrl: './editElection.component.html',
    styleUrls: ['./editElection.component.css']
  })
  
  export class EditElectionComponent  implements OnInit,AfterViewInit{

    companyId:number
    ElectionsList: Election[];
    election:Election=new Election();
    dateNow=new Date();
    constructor(private router:Router,private route:ActivatedRoute,private electionService:ElectionService){
     }
     @ViewChild(EditElectionDetailsComponent,{static:false}) electionDetails:EditElectionDetailsComponent;
     @ViewChild(EditElectionOptionsComponent,{static:false}) option:EditElectionOptionsComponent;
     @ViewChild(EditVotersComponent,{static:false}) voters:EditVotersComponent;



     ngOnInit() {
      sessionStorage.setItem('enter','3');
      
      }

      ngAfterViewInit() {
         this.route.params.subscribe(e=>
         
            {
               this.election.ElectionId=e.id;
               if(sessionStorage.getItem('electionToEdit')!=e.id)
               {
                  sessionStorage.setItem('electionToEdit',e.id.toString())
                  this.electionDetails.ngOnInit();
                  this.option.ngOnInit();
                  this.voters.ngOnInit();
   
   
               }
   
               this.searchElection();
            }) 

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
     
     
   
