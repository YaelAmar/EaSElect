
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class VoterService{

    url='http://localhost:55866/api/voter'
    constructor(private http:HttpClient){


    }

    public uploadFile (voters: File,electionId:number): Observable<Object>{
     let formData = new FormData();
     formData.append('voters',voters);
     formData.append('electionId',electionId.toString());
     return this.http.post(`${this.url}/loadDataVoters`,formData);
  }
}