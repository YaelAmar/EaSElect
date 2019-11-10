import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions={
    headers:new HttpHeaders({'Content-type':'application/json'})}

@Injectable()
export class ElectionService{

    url='http://localhost:55866/api/election/addElection'
    constructor(private http:HttpClient){


    }
    AddNewElection(electionName:string, startDate:Date, endDate:Date,  companyId:number)
     {

    }
}