
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions={
    headers:new HttpHeaders({'Content-type':'application/json'})}

@Injectable()
export class VoterService{

    url='http://localhost:55866/api/voters/loadDataVoters'
    constructor(private http:HttpClient){


    }
    LoadDataVoters(path:string,electionId:number)
    {
        
    }
}