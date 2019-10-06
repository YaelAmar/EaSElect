import { Component } from '@angular/core';
import { MeetingsService } from 'src/app/services/MeetingsService';
import { Meeting } from 'src/app/models/Meeting.model';
import { member } from 'src/app/models/member.model';
import { MemeberService } from 'src/app/services/MemberServices';
import { memberCriteria } from 'src/app/models/memberCriteria.model';
@Component({
    selector: 'app-Invitation',
    templateUrl: './Invitation.html',
    styleUrls: ['./Invitation.css']
  })
  export class InvitationComponent {
    meeting:Meeting
    members:member[]
    subscribe:any;
    subject:string
    invitedMembers:member[]
    date:Date
  Director:string
   message:string;
  private selectedname ;
    constructor(private  MemeberService:MemeberService,
                private  MeetingsService:MeetingsService){
        this.subscribe=this.MemeberService.get(new memberCriteria()).subscribe(d=>this.members=d);

      }

      Invite()
      {
        this.message="שולח הזמנות..."
        this.MeetingsService.invite(this.subject,this.invitedMembers.map(i=>i.MailMember),this.Director,this.date).subscribe(i=>{
          console.log('1111111111111111111111111111111111111111111111111'+i);
          if(i==true)
        {
          this.message="ההזמנה נשלחה בהצלחה!"
           this.subject=null;
           this.invitedMembers=null;
           this.Director=null;
           this.date=null;
        }
          else
          this.message="התרחשה שגיאה בשליחת ההזמנה"
        });

      }

      ngDestroy()
      {
          this.subscribe=null;
      }
  }