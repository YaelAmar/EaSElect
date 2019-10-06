import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { jobMember } from '../models/jobMember.model';
import { LogIn } from '../models/logIn.model';
import { jobMemberCriteria } from '../models/jobMemberCriteria.model';
const httpOptions={
    headers:new HttpHeaders({'Content-type':'application/json'})
}



@Injectable()
export class JobMemeberService{

    url='http://localhost:49160/api/jobMember'

    constructor(private http:HttpClient){

    }

    get(c:jobMemberCriteria):Observable<jobMember[]>
    {
        return this.http.get<jobMember[]>(`${this.url}/Get?cr.CodeMember=${c.CodeMember}&
                        cr.NameJob=${c.NameJob}&
                        cr.CodeJob=${c.CodeJob}&
                        cr.DateStart=${c.DateStart}&
                        cr.DateEnd=${c.DateEnd}`)
    }

    addJobMember(j:jobMember,l:number[])
    {
        return this.http.post(`${this.url}/AddJobMembers`,{jobMember:j,listCodes:l},httpOptions);
    }
  
}
