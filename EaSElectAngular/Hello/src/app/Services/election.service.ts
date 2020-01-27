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
        return this.http.post<number>(`${this.url}/addElection`,newElection);
    }
 
    GetAllElections(companyId:number):Observable<Election[]>
    {
        return this.http.get<Election[]>(`${this.url}/getAllElections/${companyId}`);
    }

}