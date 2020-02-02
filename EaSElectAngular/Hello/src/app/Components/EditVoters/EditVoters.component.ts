import { Component, Input } from "@angular/core";
import { VoterService } from '../../Services/voter.service';
import { EmailService } from '../../Services/email.service';

@Component({
    selector: 'app-editVoters',
    templateUrl: './editVoters.component.html',
    styleUrls: ['./editVoters.component.css']
  })
  export class EditVotersComponent {
    electionToEdit:number
    constructor(private voterService:VoterService,private emailService:EmailService)
    {

    }
  ngOnInit()
  {
    this.electionToEdit=+sessionStorage.getItem('electionToEdit')
    console.log(this.electionToEdit)
    
  }
  reUploadVoters(fileInput){
     this.voterService.uploadFile(fileInput.files[0],this.electionToEdit).subscribe();
     console.log("הבוחרים נטענו מחדש בהצלחה")
  }
  reUploadEmails(fileInput){
     this.emailService.uploadEmails(fileInput.files[0],this.electionToEdit).subscribe();
     console.log("מיילי הבוחרים נטענו מחדש בהצלחה")
 
  }
}