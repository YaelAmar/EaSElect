import { Component, Input, Output, EventEmitter } from "@angular/core";
import { ElectionOptionService } from "../../Services/electionOption.service";
import { ElectionOption } from "../../Models/electionOption.model";

@Component({
    selector: 'app-electionOption',
    templateUrl: './electionOption.component.html',
    styleUrls: ['./electionOption.component.css']
  })
  export class ElectionOptionComponent {
  
    newElectionOption:ElectionOption=new ElectionOption();
    countOptions:number=0
    @Input()  electionId:number
    @Output() isElectionAdded=new EventEmitter<boolean>();

   constructor(private electionOptionService:ElectionOptionService){
   }
  
   ngOnInit() {
    this.newElectionOption.ElectionId=this.electionId;
   }

   AddElectionOption(frm:any){
    this.electionOptionService.AddNewElectionOption(this.newElectionOption).subscribe(electionOptionId=>{
    this.newElectionOption.ElectionOptionId=electionOptionId;
     if(electionOptionId!=0)
     {
       this.countOptions++;
     }
   else 
   console.log("אופציית בחירה זו כבר קיימת בבחירות אלו")

    });

   }
   AddVoters(){
     this.isElectionAdded.emit(true)
   }
  
}