import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ElectionOption } from '../Models/electionOption.model';
import { ElectionResult } from '../Models/electionResult.model';
import { ResultOfOption } from '../Models/resultOfOption';

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
      GetResult(electionId: number):Observable<ResultOfOption[]> {
          return this.http.get<ResultOfOption[]>(`${this.url}/getResult/${electionId}`);
          }
    }