
import { Component } from '@angular/core';
import { LogIn } from '../../Models/Login.model';



@Component({
  selector: 'app-logIn',
    templateUrl: './LogIn.component.html',
    styleUrls: ['./LogIn.component.css']
  })
  
  export class LogInComponent {
    login:LogIn
    subscribe:any
  
    enter(){

    }
//    constructor(private  associationDetailsService:AssociationDetailsService){
//        this.subscribe=this.associationDetailsService.get().subscribe(d=>this.detailsAssociation=d);
//    }
  
   ngOnInit(logIn:LogIn)
   {
    //  this.logIn.userName=logIn.userName;
    //  this.logIn.password=logIn.password;
   }
}