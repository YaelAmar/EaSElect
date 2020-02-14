import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ElectionOption } from '../Models/electionOption.model';
import { ElectionResult } from '../Models/electionResult.model';
import { ResultOfOption } from '../Models/resultOfOption';
import { ResultByType } from '../Models/resultByType.model';
import { ResultOfOptionByTypeDetails } from '../Models/ResultOfOptionByTypeDetails.model';

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
      GetResultOptionByType(typeId:number,electionOptionId:number):Observable<ResultOfOption[]>
      {
          return this.http.get<ResultOfOption[]>(`${this.url}/getResultOptionByType/${typeId}/${electionOptionId}`);
      }
      GetResultByType(typeId: number, resultOfOptionList: ResultOfOption[]):Observable<ResultOfOptionByTypeDetails[]> {
      let resultByType:ResultByType=new ResultByType();
      resultByType.TypeId=typeId;
      resultByType.ResultOfOption=resultOfOptionList
       return this.http.post<ResultOfOptionByTypeDetails[]>(`${this.url}/getResultByType`,resultByType);
      }
    }