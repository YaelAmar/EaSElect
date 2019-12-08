import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Company } from '../Models/company.model';

const httpOptions={
    
    headers:new HttpHeaders({'Content-type':'application/json'})}

@Injectable()
export class CompanyService{

    url='http://localhost:55866/api/company'
    constructor(private http:HttpClient){


    }
    

    Login(userName:string, password:string):Observable<boolean>
    {
     return this.http.get<boolean>(`${this.url}/login?userName=${userName}&password=${password}`)
    }

    SignUp(companyName:string,userName:string, password:string)
    {
    let newCompany =new Company(companyName,userName,password);
    return this.http.post(`${this.url}/signUp?companyName=${companyName}&userName=${userName}&password=${password}`,newCompany);
    }
}