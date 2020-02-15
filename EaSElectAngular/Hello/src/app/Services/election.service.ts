import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Headers } from '@angular/http';
import { Election } from '../Models/election.model';

@Injectable()
export class ElectionService{
  

    url='http://localhost:55866/api/election'
    constructor(private http:HttpClient){


    }
    AddNewElection(newElection:Election):Observable<number>
    {
        let  headers=new Headers({'Content-type':'application/json; charset=utf-8'});
        return this.http.post<number>(`${this.url}/add`,newElection);
    }
 
    GetAllElections(companyId:number):Observable<Election[]>
    {
    return this.http.get<Election[]>(`${this.url}/getByCompanyCode/${companyId}`);
    }
    EditElection(electionToEdit: Election):Observable<void> {
        return this.http.post<void>(`${this.url}/edit`,electionToEdit);
      }
    GetElectionByCode(electionId:number):Observable<Election>
    {
        return this.http.get<Election>(`${this.url}/getByElectionCode/${electionId}`);
    }
    GetCompanyIdByElectionId(electionId: number):Observable<number> {
        return this.http.get<number>(`${this.url}/GetCompanyIdByElectionId/${electionId}`);
      }
      SendResultEmails(newElection: Election):Observable<void> {
        return this.http.post<void>(`${this.url}/send`,newElection);
      }
     
}