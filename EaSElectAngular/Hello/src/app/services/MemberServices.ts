import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  memberCriteria } from '../models/memberCriteria.model';
import { Observable } from 'rxjs';
import { member } from '../models/member.model';
//downloadFile(data: Blob) { 
//    const contentType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'; 
//    const blob = new Blob([data], { type: contentType });
//    const urlValue = window.URL.createObjectURL(blob);
//    window.open(urlValue);
//}

@Injectable()

export class MemeberService{

    url='http://localhost:49160/api/Members'

    constructor(private http:HttpClient){
    }

    get(c:memberCriteria):Observable<member[]>
      {
        var _url=this.url+'/GetByCriteria?';
        if(c.IdMember)
        _url+=`IdMember=${c.IdMember}&`
        if(c.JoinDate)
        _url+=`JoinDate=${c.JoinDate}&`
        if(c.AllowedSignature)
        _url+=`AllowedSignature=${c.AllowedSignature}&`
        if(c.ExitDate)
        _url+=`ExitDate=${c.ExitDate}&`
        if(c.MailMember)
        _url+=`MailMember=${c.MailMember}&`
        if(c.NameMember)
        _url+=`NameMember=${c.NameMember}&`
        if(c.TypeMember)
        _url+=`TypeMember=${c.TypeMember}&`

        return this.http.get<member[]>(`${_url}`)
    }

      exportMembers():Observable<any[]>
      {
        
          return this.http.get<any[]>(`${this.url}/ExportMembers`)
      }

      exportMember(c:memberCriteria):Observable<number[]>
      {
          return this.http.get<number[]>(`${this.url}/ExportMember?cr.IdMember=${c.IdMember}&
                                                                   cr.NameMember=${c.NameMember}&
                                                                   cr.TypeMember=${c.TypeMember}&
                                                                   cr.AllowedSignature=${c.AllowedSignature}&
                                                                   cr.MailMember=${c.MailMember}&
                                                                   cr.JoinDate=${c.JoinDate}&
                                                                   cr.ExitDate=${c.ExitDate}`)
      }
  
}


//downloadFile(data: Blob) { 
//    const contentType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'; 
//    const blob = new Blob([data], { type: contentType });
//    const urlValue = window.URL.createObjectURL(blob);
//    window.open(urlValue);
//
//}