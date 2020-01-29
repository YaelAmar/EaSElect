import { Component, Input } from "@angular/core";
import { ElectionOption } from '../../Models/electionOption.model';
import { ElectionOptionService } from '../../Services/electionOption.service';

@Component({
    selector: 'app-editElectionOptions',
    templateUrl: './EditElectionOptions.component.html',
    styleUrls: ['./EditElectionOptions.component.css']
  })
  export class EditElectionOptionsComponent {
    electionIdToEdit:number
    electionOptionList:ElectionOption[]
    newElectionOptionList:string[]
    addStatus:boolean=false
    constructor(private electionOptionService:ElectionOptionService){
    
    }
  ngOnInit()
  {
    this.electionIdToEdit=+sessionStorage.getItem('electionToEdit')
    this.electionOptionService.GetAllElectionOption(this.electionIdToEdit).subscribe(list=>
      {
        this.electionOptionList=list;
        console.log(this.electionOptionList)
      });
  }
  showAndAddOption(value:string){
    this.addStatus=true
    if(value!=null)
    {
     var f=this.newElectionOptionList.push((value))
     console.log(f)
    }
     }
}