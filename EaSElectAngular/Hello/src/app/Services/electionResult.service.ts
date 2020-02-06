import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions={
    headers:new HttpHeaders({'Content-type':'application/json'})}

@Injectable()
export class ElectionResultService{
  

    url='http://localhost:55866/api/electionResult'
    constructor(private http:HttpClient){
    }
    sendChoose(voterCode: number, electionOptionId: number):Observable<void> {
      return this.http.get<void>(`${this.url}/sendChoose/${voterCode}/${electionOptionId}`);
      }
}