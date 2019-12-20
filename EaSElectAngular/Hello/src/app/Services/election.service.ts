import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { RequestOptions, Headers } from '@angular/http';
import { Election } from '../Models/election.model';

const httpOptions={
    headers:new HttpHeaders({'Content-type':'application/json'})}

@Injectable()
export class ElectionService{

    url='http://localhost:55866/api/election'
    constructor(private http:HttpClient){


    }
    AddNewElection(newElection:Election):Observable<number>
    {
        let  headers=new Headers({'Content-type':'application/json; charset=utf-8'});
        let options = new RequestOptions({ headers: headers })
        return this.http.post<number>(`${this.url}/addElection`,newElection);
    }
}