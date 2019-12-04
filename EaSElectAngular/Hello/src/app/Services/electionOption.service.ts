import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions={
    headers:new HttpHeaders({'Content-type':'application/json'})}

@Injectable()
export class ElectionOptionService{

    url='https://localhost:55866/api/electionOption/addElectionOption'
    constructor(private http:HttpClient){


    }
    AddNewElectionOption(electionOptionName:string,electionId:number)
     {

    }
}