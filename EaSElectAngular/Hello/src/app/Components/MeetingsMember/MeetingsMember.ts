import { Component, Input } from '@angular/core';
import { Meeting } from 'src/app/models/Meeting.model';
import { MeetingsService } from 'src/app/services/MeetingsService';
import { MeetingMemberCriteria } from 'src/app/models/MeetingMemberCritera.model';
@Component({
    selector: 'app-MeetingsMember',
    templateUrl: './MeetingsMember.html',
    styleUrls: ['./MeetingsMember.css']
  })
  export class MeetingsMemberComponent {
 
    @Input() codeMember:number=1000

    meetings:Meeting[]
    subscribe:any;
    meetingMemberCriteria:MeetingMemberCriteria= new MeetingMemberCriteria(this.codeMember);

    constructor(private  MeetingsService:MeetingsService){
        this.subscribe=this.MeetingsService.get(this.meetingMemberCriteria).subscribe(d=>this.meetings=d);
    }
    
    ngOnInit()
    {
   
    }
   
    ngOnDestroy()
    {
    this.subscribe=null;
    }
   
   
   }