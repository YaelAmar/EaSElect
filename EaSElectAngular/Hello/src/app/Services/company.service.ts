import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions={
    headers:new HttpHeaders({'Content-type':'application/json'})}

@Injectable()
export class CompanyService{

    url='http://localhost:55866/api/company/addCompany'
    constructor(private http:HttpClient){


    }
    AddNewCompany(companyName:string, userName:string, password:string) {

    }
}