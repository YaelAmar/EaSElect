import { Component, Input } from "@angular/core";
import { VoterService } from "../../Services/voter.service";
import { EmailService } from '../../Services/email.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
    selector: 'app-add-voters',
    templateUrl: './addVoters.component.html',
    styleUrls: ['./addVoters.component.css']
  })
  export class AddVotersComponent{

     @Input() electionId:number

    constructor(private voterService:VoterService,private emailService:EmailService,private router:Router){
      
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
    console.log("הבוחרים נטענו בהצלחה")
  }
  uploadEmailList(fileInput){
      this.emailService.uploadEmails(fileInput.files[0],this.electionId).subscribe();
  console.log("מיילי הבוחרים נטענו בהצלחה")

}

next(){
  sessionStorage.setItem('electionToEdit',this.electionId.toString());
  this.router.navigate(['/EditElection',this.electionId]);
}


}