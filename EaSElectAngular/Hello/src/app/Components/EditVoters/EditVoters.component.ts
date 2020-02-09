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
    send:boolean=true
    voters:boolean=true
    constructor(private voterService:VoterService,private emailService:EmailService)
    {

    }
  ngOnInit()
  {
    this.electionToEdit=+sessionStorage.getItem('electionToEdit')
    
  }
  reUploadVoters(fileInput){
     this.voterService.uploadFile(fileInput.files[0],this.electionToEdit).subscribe();
     console.log("הבוחרים נטענו מחדש בהצלחה")
this.voters=false
  }
  reUploadEmails(fileInput){
     this.emailService.uploadEmails(fileInput.files[0],this.electionToEdit).subscribe();
     console.log("מיילי הבוחרים נטענו מחדש בהצלחה")
 this.send=false
  }
  SendMessageToVoters()
  {
    this.emailService.SendMessage(this.electionToEdit).subscribe(notSuccessed=>
      {
        console.log(notSuccessed);
        console.log("the messages sent");
      this.send=true
      this.send=null
      });
  }
}