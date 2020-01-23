
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { FileDetails } from '../Models/FileDetails';

@Injectable()
export class VoterService{

    url='http://localhost:55866/api/voter'
    constructor(private http:HttpClient){


    }
    LoadDataVoters(fileDetails:FileDetails):Observable<number>
    {
        let headers=new Headers({'Content-type':'application/json; charset=utf-8'});
        return this.http.post<number>(`${this.url}/loadDataVoters`,fileDetails);
    }

    public uploadImage (image: File): Observable<Object>{
     let formData = new FormData();
     formData.append('image',image);
     return this.http.post(`${this.url}/addSale`,formData);
  }
}