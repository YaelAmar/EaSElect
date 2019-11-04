
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {generalProtocol } from '../models/general.protocol.model'


const httpOptions={
    headers:new HttpHeaders({'Content-type':'application/json'})}

@Injectable()
export class ProtocolService{

    url='http://localhost:49160/api/Protocol'
    constructor(private http:HttpClient){

    }
    get():Observable<generalProtocol>
    {
        return this.http.get<generalProtocol>(`${this.url}/Get`)
    }
    create(g:generalProtocol)
    {
       return this.http.post(`${this.url}/Create`,{name:'avital'});
    }
}