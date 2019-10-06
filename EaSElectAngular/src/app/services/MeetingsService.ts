import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Meeting } from '../models/Meeting.model';
import { MeetingMemberCriteria } from '../models/MeetingMemberCritera.model';
import { ProtocolCriteria } from '../models/ProtcolCriteria.model';
import { member } from '../models/member.model';





@Injectable()
export class MeetingsService{

    url='http://localhost:49160/api/Meeting'

    constructor(private http:HttpClient){

    }

     getAllMeetings(protocolsCriteria:ProtocolCriteria):Observable<Meeting[]>
     {
        var _url=this.url+'/Get?';
        if(protocolsCriteria.DateMeeting)
        _url+=`sub=${protocolsCriteria.DateMeeting}&`
        if(protocolsCriteria.SubjectMeeting)
        _url+=`membersInvite=${protocolsCriteria.SubjectMeeting}&`
        if(protocolsCriteria.MonthMeeting)
        _url+=`director=${protocolsCriteria.MonthMeeting}&`
        if(protocolsCriteria.MeetingDirector)
        _url+=`date=${protocolsCriteria.MeetingDirector}&`
        var res =  this.http.get<Meeting[]>(`${_url}`)
        return res;
     }

    invite(sub:string,membersInvite:string[],director:string ,date:Date):Observable<boolean>
    {
        var _url=this.url+'/Invite?';
        if(sub)
        _url+=`sub=${sub}&`
         if(membersInvite)
         membersInvite.forEach(i=>_url+=`membersInvite=${i}&`) 
        if(director)
        _url+=`director=${director}&`
        if(date)
        _url+=`date=${date}&`


    return this.http.get<boolean>(`${_url}`)
    }

 
    get(meetingMemberCriteria:MeetingMemberCriteria):Observable<Meeting[]>
    {

        var _url=this.url+'/GetByCriteria?';
        if(meetingMemberCriteria.codeMember)
        _url+=`CodeMember=${meetingMemberCriteria.codeMember}&`
        if(meetingMemberCriteria.MeetingDate)
        _url+=`MeetingDate=${meetingMemberCriteria.MeetingDate}&`
        if(meetingMemberCriteria.Subject)
        _url+=`Subject=${meetingMemberCriteria.Subject}&`
      
       
        return this.http.get<Meeting[]>(`${_url}`)
    }

    
downloadFile(data: Blob) { 
    const contentType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'; 
    const blob = new Blob([data], { type: contentType });
    const urlValue = window.URL.createObjectURL(blob);
    window.open(urlValue);




}


}