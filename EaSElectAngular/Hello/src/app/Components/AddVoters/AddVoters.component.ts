import { Component, Input } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { VoterService } from "../../Services/voter.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FileDetails } from "../../Models/FileDetails";
import { EmailService } from '../../Services/email.service';

@Component({
    selector: 'app-add-voters',
    templateUrl: './addVoters.component.html',
    styleUrls: ['./addVoters.component.css']
  })
  export class AddVotersComponent{
  
    subscribe:any;
    subscripion:Subscription
   // electionId: number;
    //@ViewChild('fileInput', {  }) fileInput:ElementRef;
     fileDetails:FileDetails=new FileDetails();
     uploadUrl:string;
     @Input() electionId:number

    constructor(private voterService:VoterService,private emailService:EmailService,private route: ActivatedRoute,private router:Router){
      
    }
    ngOnInit() {
      this.uploadUrl = `http://localhost:55866/api/voters/loadDataVoters/${this.electionId}`
     }


     localUrl:any[];
   


    LoadDataVoters(event:any){
      this.fileDetails.ElectionId=this.electionId;
      this.voterService.LoadDataVoters(this.fileDetails).subscribe(result=>{
      if(result!=0)  {
        console.log("load data succesfuly");
      }
     else 
        console.log("בחירות אלו לא קיימות ")
     });
 
    }
    LoadEmails(){
      this.emailService.LoadEmails(this.electionId);
    }
    SendMessageToVoters()
    {
      this.emailService.SendMessage(this.electionId).subscribe(notSuccessed=>
        {
          console.log(notSuccessed);
          console.log("the messages sent");

        });
    }

    upload(imageInput) {
    debugger
    this.voterService.uploadImage(imageInput.files[0]).subscribe();
  }

}