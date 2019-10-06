import { Component } from '@angular/core';
import { Meeting } from 'src/app/models/Meeting.model';
import { MeetingsService } from 'src/app/services/MeetingsService';
import { ProtocolCriteria } from 'src/app/models/ProtcolCriteria.model';

@Component({
    selector: 'app-Meetings',
    templateUrl: './Meetings.html',
    styleUrls: ['./Meetings.css']
  })
  export class MeetingsComponent {
 
     meetings:Meeting[]=[]
     subscribe:any;
     meetingCriteria:Meeting
     protocolCriteria:ProtocolCriteria=new ProtocolCriteria();
     
   
    constructor(private  MeetingsService:MeetingsService){
      this.subscribe=this.MeetingsService.getAllMeetings(this.protocolCriteria).subscribe(d=>this.meetings=d);
    }
    
    ngOnInit()
    {
   
    }
   
    ngOnDestroy()
    {
    this.subscribe=null;
    }
   
    searchInMeetings(frm: any) {
      
      this.subscribe = this.MeetingsService.getAllMeetings(this.protocolCriteria).subscribe(m => this.meetings = m)
    }
   

}