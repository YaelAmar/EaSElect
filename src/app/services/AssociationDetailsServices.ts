import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { detailsAssociation } from '../models/detailsAssociation.model';
import { LogIn } from '../models/logIn.model';

const httpOptions={
    headers:new HttpHeaders({'Content-type':'application/json','Access-Control-Allow-Origin': '*'})
}



@Injectable()
export class AssociationDetailsService{

    url='http://localhost:49160/api/AssociationDetails' 

    constructor(private http:HttpClient){

    }

    get():Observable<detailsAssociation>
    {
        //debugger;
        var _url=this.url+'/Get?';
        return this.http.get<detailsAssociation>(`${_url}`)
    }

    addOrEdit(d:detailsAssociation)
    { 
        var _url=this.url+'/AddOrEdit';
      //   _url+=`NameOfAsscition=${d.NameOfAssciation}&`;
      //   if(d.DescriptionOfAsscition)
       //  _url+=`DescriptionOfAsscition=${d.DescriptionOfAsscition}&`;
       //  if(d.YearEstablished)
        // _url+=`YearEstablished=${d.YearEstablished}&`;
       //  _url+=`id=${d.AssociationNumber}&`;
       //  _url+=`UserName=${d.UserName}&`;
        // _url+=`Password=${d.Password}`;
     this.http.post<void>(`${_url}`,JSON.stringify(d),httpOptions).subscribe(s=>{});
    }

    delete()
    {
        return this.http.delete(`${this.url}/Delete`)
    }

    logIn(UserName:string,Password:string):Observable<boolean>
    {  
        return this.http.get<boolean>(`${this.url}/Login?UserName=${UserName}&Password=${Password}`)
    }

}