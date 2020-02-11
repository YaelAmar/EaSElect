import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TypeDetails } from '../Models/typeDetails.model';

const httpOptions={
    headers:new HttpHeaders({'Content-type':'application/json'})}

@Injectable()
export class TypeDetailsService{
 

    url='http://localhost:55866/api/typeDetails'
    constructor(private http:HttpClient){


    }
    Get(typeId:number):Observable<TypeDetails[]> {
    return this.http.get<TypeDetails[]>(`${this.url}/get/${typeId}`);
        
      }
   
}