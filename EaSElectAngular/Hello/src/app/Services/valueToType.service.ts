
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { TypeDetails } from '../Models/typeDetails.model';

@Injectable()
export class ValueToTypeService{
 
  
    url='http://localhost:55866/api/valueToType'
    constructor(private http:HttpClient){
    }
    GetValueToTypeOfVoter(voterCode: number):Observable<TypeDetails[]> {
          return this.http.get<TypeDetails[]>(`${this.url}/getVoterCodeByVoterIdInCurrentElection/${voterCode}`);
        
      }

    DeleteValueToType(voterCode: number,typeDetailsId: number,checked1:boolean):Observable<void> {
        return this.http.get<void>(`${this.url}/deleteValueToType/${voterCode}/${typeDetailsId}/${checked1}`);
      } 
}