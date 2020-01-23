import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Company } from '../Models/company.model';
import { Headers } from '@angular/http';

    
@Injectable()
export class EmailService{

    url='http://localhost:55866/api/email'
    constructor(private http:HttpClient){


    }
    LoadEmails(electionId:number):Observable<number>
    {
    let  headers=new Headers({'Content-type':'application/json; charset=utf-8'});
    return this.http.post<number>(`${this.url}/loadEmails`,electionId);
    }
    SendMessage(electionId:number):Observable<number>
    {
    let  headers=new Headers({'Content-type':'application/json; charset=utf-8'});
    return this.http.post<number>(`${this.url}/sendMessage`,electionId);
    }
    SendResult(electionId:number):Observable<number>
    {
    let  headers=new Headers({'Content-type':'application/json; charset=utf-8'});
    return this.http.post<number>(`${this.url}/sendResult`,electionId);
    }
}