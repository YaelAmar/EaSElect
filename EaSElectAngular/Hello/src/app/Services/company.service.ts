import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Company } from '../Models/company.model';
import { Headers } from '@angular/http';

    
@Injectable()
export class CompanyService{

    url='http://localhost:55866/api/company'
    constructor(private http:HttpClient){


    }
    

    Login(userName:string, password:string):Observable<number>
    {
     return this.http.get<number>(`${this.url}/login/${userName}/${password}`)
    }

    SignUp(newCompany:Company):Observable<number>
    {
    let  headers=new Headers({'Content-type':'application/json; charset=utf-8'});
    return this.http.post<number>(`${this.url}/signUp`,newCompany);
    }
}