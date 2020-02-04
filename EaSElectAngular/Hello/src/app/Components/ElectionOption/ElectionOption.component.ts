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
    //electionOptionList:ElectionOption[]
    electionOptionList:Array<ElectionOption>=new Array<ElectionOption>();
    @Input()  electionId:number
    @Output() isElectionAdded=new EventEmitter<boolean>();
  i:number=0;
   constructor(private electionOptionService:ElectionOptionService){
   }
  
   ngOnInit() {
    this.newElectionOption.ElectionId=this.electionId;
    
   }

   AddElectionOption(frm:any){
     
     this.electionOptionList[this.i]=(this.newElectionOption)
     this.countOptions++;
     this.i++;
      console.log(this.electionOptionList)
      this.newElectionOption=new ElectionOption();
    this.newElectionOption.ElectionId=this.electionId;

     }
   AddVoters(){
    this.electionOptionService.AddNewElectionOption(this.electionOptionList).subscribe()     
     this.isElectionAdded.emit(true)
   }
  
}