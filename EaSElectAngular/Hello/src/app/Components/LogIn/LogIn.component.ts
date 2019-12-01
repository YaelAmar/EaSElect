
import { Component } from '@angular/core';
import { LogIn } from '../../Models/Login.model';
import { CompanyService } from '../../Services/company.service';



@Component({
    selector: 'app-logIn',
    templateUrl: './LogIn.component.html',
    styleUrls: ['./LogIn.component.css']
  })
  
  export class LogInComponent {
    logIn:LogIn=new LogIn();
    subscribe:any
    res:boolean

   
   constructor(private  companyService:CompanyService){
    }
  
   ngOnInit()
   {
    
   }
   enter(){
      this.subscribe=this.companyService.Login(this.logIn.UserName,this.logIn.Password).subscribe(d=>this.res=d);
      if(this.res==true)
      {
        console.log("yes");
      }
      else
      console.log("no");
        
 
   }
}