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
    addStatus:boolean=false
    newOption:ElectionOption=new ElectionOption()
    constructor(private electionOptionService:ElectionOptionService){
    
    }
  ngOnInit()
  {
    this.electionIdToEdit=+sessionStorage.getItem('electionToEdit')
    console.log(this.electionIdToEdit);
    this.electionOptionService.GetAllElectionOption(this.electionIdToEdit).subscribe(list=>
      {
        this.electionOptionList=list;
        console.log(this.electionOptionList)
      });
      this.newOption.ElectionId=this.electionIdToEdit;
  }
  showAndAddOption(electionOptionName:string){
    this.addStatus=true
    if(electionOptionName!=null)
     {
     this.electionOptionService.AddNewElectionOption(this.newOption).subscribe(electionOptionId=>
      {
        this.newOption.ElectionOptionId=electionOptionId;
        console.log("yes "+this.newOption.ElectionOptionName,this.newOption.ElectionOptionId)
     this.ngOnInit()
    })
     this.newOption=new ElectionOption()
    

      }
    }
    editOption(electionOption:ElectionOption,optionName:string){
  
   electionOption.ElectionOptionName=optionName;
   this.electionOptionService.Edit(electionOption).subscribe();
    }
     deleteOption(electionOption:ElectionOption){
        this.electionOptionService.DeleteOption(electionOption.ElectionOptionId).subscribe();
        this.ngOnInit()
        console.log("delete")
    }
}