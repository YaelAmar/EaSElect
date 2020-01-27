import { Component, Input } from "@angular/core";
import { VoterService } from "../../Services/voter.service";
import { EmailService } from '../../Services/email.service';

@Component({
    selector: 'app-add-voters',
    templateUrl: './addVoters.component.html',
    styleUrls: ['./addVoters.component.css']
  })
  export class AddVotersComponent{

     @Input() electionId:number

    constructor(private voterService:VoterService,private emailService:EmailService){
      
    }
    ngOnInit() {
     }

    SendMessageToVoters()
    {
      this.emailService.SendMessage(this.electionId).subscribe(notSuccessed=>
        {
          console.log(notSuccessed);
          console.log("the messages sent");

        });
    }

    upload(fileInput) {
    this.voterService.uploadFile(fileInput.files[0],this.electionId).subscribe();
  }
  uploadEmailList(fileInput){
      this.emailService.uploadEmails(fileInput.files[0],this.electionId).subscribe();
}

}