import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ElectionOption } from '../Models/electionOption.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ElectionOptionService{

    url='http://localhost:55866/api/electionOption'
    constructor(private http:HttpClient){
    }
    AddNewElectionOption(newElectionOption:ElectionOption):Observable<number>{
        let  headers=new Headers({'Content-type':'application/json; charset=utf-8'});
        return this.http.post<number>(`${this.url}/addElectionOption`,newElectionOption);
    }
}