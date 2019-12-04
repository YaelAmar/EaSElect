import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const httpOptions={
    headers:new HttpHeaders({'Content-type':'application/json'})}

@Injectable()
export class ElectionService{

    url='https://localhost:55866/api/election/addElection'
    constructor(private http:HttpClient){


    }
    AddNewElection(electionName:string, startDate:Date, endDate:Date,  companyId:number)
    {
     this.http.get<boolean>(`${this.url}?electionName=${electionName}&startDate=${startDate}&EndDate=${endDate}&companyId=${companyId}`);
    }
}