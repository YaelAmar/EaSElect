
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { FileDetails } from '../Models/FileDetails';

@Injectable()
export class VoterService{

    url='http://localhost:55866/api/voters'
    constructor(private http:HttpClient){


    }
    LoadDataVoters(fileDetails:FileDetails):Observable<number>
    {
        let headers=new Headers({'Content-type':'application/json; charset=utf-8'});
        return this.http.post<number>(`${this.url}/loadDataVoters`,fileDetails);
    }
}