
import { Component } from '@angular/core';
import { Election } from '../../Models/election.model';
import { ElectionService } from '../../Services/election.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-menu',
    templateUrl: './Menu.component.html',
    styleUrls: ['./Menu.component.css']
  })
  
  export class MenuComponent {
    
    ElectionsList:Election[];  
    companyId:number
    ResultElectionsList:Election[]
    constructor(private electionService:ElectionService,private router:Router){
     
    }
 
    ngOnInit()
    {
   this.companyId=+sessionStorage.getItem('companyId')
   this.electionService.GetAllElections(this.companyId).subscribe((list:Election[])=>{
   this.ElectionsList=list;
   this.ResultElectionsList=list
      });
   
  
  }
  addElection(){
    this.router.navigate(['/Election']);

  }

  selectedElection(election:Election){
   // if(new Date(election.StartDate)<new Date()&&new Date(election.EndDate)<new Date()) 
        {
    //     console.log("לא בזמן")
         
        }
 ////   else
     {
      sessionStorage.setItem('electionToEdit',election.ElectionId.toString())
      console.log(election)
      console.log(sessionStorage.getItem('electionToEdit'))
     debugger
     this.router.navigate(['/EditElection']);
     // window.location.reload();
      }
     }

   ResultElection(election:Election){
    console.log(election)
    sessionStorage.setItem('electionResult',election.ElectionId.toString())
    this.router.navigate(['/Results']);
      
  }
  home(){
    this.router.navigate(['/Home']);
  }
}