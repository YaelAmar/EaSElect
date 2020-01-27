import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Headers } from '@angular/http';

    
@Injectable()
export class EmailService{

    url='http://localhost:55866/api/email'
    constructor(private http:HttpClient){


    }
   public uploadEmails (emails: File,electionId:number): Observable<Object>{
             let formData = new FormData();
             formData.append('emails',emails);
             formData.append('electionId',electionId.toString());
             return this.http.post(`${this.url}/loadEmails`,formData);
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