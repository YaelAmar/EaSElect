import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Type } from '../Models/type.model';

const httpOptions={
    headers:new HttpHeaders({'Content-type':'application/json'})}

@Injectable()
export class TypeService{
 

    url='http://localhost:55866/api/type'
    constructor(private http:HttpClient){


    }
    Get():Observable<Type[]> {
    return this.http.get<Type[]>(`${this.url}/get`);
        
      }
   
}