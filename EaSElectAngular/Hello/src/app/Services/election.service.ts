import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { RequestOptions, Headers } from '@angular/http';

const httpOptions={
    headers:new HttpHeaders({'Content-type':'application/json'})}

@Injectable()
export class ElectionService{

    url='http://localhost:55866/api/election/addElection'
    constructor(private http:HttpClient){


    }
    AddNewElection(electionName:string, startDate:Date, endDate:Date,  companyId:number)//:Observable<number>
    {
        let  headers=new Headers({'Content-type':'application/json; charset=utf-8'});
        let options = new RequestOptions({ headers: headers })
       
     //this.http.post<number>(`${this.url}?electionName=${electionName}&startDate=${startDate}&EndDate=${endDate}&companyId=${companyId}`);
    }
}