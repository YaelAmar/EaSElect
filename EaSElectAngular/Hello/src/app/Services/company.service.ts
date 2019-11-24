import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const httpOptions={
    headers:new HttpHeaders({'Content-type':'application/json'})}

@Injectable()
export class CompanyService{

    url='http://localhost:55866/api/company'
    constructor(private http:HttpClient){


    }
    AddNewCompany(companyName:string, userName:string, password:string) {

    }

    Login(userName:string, password:string):Observable<boolean>
    {
     return this.http.get<boolean>(`${this.url}/login?UserName=${userName}&Password=${password}`)
    }

    SignUp(companyName:string,userName:string, password:string):Observable<boolean>
    {
     return this.http.get<boolean>(`${this.url}/signUp?CompanyName=${companyName}&UserName=${userName}&Password=${password}`)
    }
}