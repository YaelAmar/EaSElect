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
    electionOptionList:ElectionOption[]
    @Input()  electionId:number
    @Output() isElectionAdded=new EventEmitter<boolean>();

   constructor(private electionOptionService:ElectionOptionService){
   }
  
   ngOnInit() {
    this.newElectionOption.ElectionId=this.electionId;
   }

   AddElectionOption(frm:any){
     this.electionOptionList.push(this.newElectionOption)
     console.log(this.electionOptionList)
     }
   AddVoters(){
    this.electionOptionService.AddNewElectionOption(this.electionOptionList).subscribe()     
     this.isElectionAdded.emit(true)
   }
  
}