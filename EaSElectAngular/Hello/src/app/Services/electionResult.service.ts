import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ElectionOption } from '../Models/electionOption.model';
import { ElectionResult } from '../Models/electionResult.model';

const httpOptions={
    headers:new HttpHeaders({'Content-type':'application/json'})}

@Injectable()
export class ElectionResultService{
  

    url='http://localhost:55866/api/electionResult'
    constructor(private http:HttpClient){
    }
    sendChoose(voterCode: number, electionOptionId: number):Observable<void> {
      return this.http.get<void>(`${this.url}/addElectionResult/${voterCode}/${electionOptionId}`);
      }
      GetResult(electionOptions: ElectionOption[]):Observable<ElectionResult[]> {
          return this.http.get<ElectionResult[]>(`${this.url}/getResult/${electionOptions}`);
          }
    }