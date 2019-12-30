
import { Component } from '@angular/core';
import { LogIn } from '../../Models/Login.model';
import { CompanyService } from '../../Services/company.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';



@Component({
    selector: 'app-logIn',
    templateUrl: './LogIn.component.html',
    styleUrls: ['./LogIn.component.css']
  })
  
  export class LogInComponent {
    logIn:LogIn=new LogIn();
    subscribe:any
    loginForm:FormGroup

   
   constructor(private  companyService:CompanyService){
     }
  
   
    
  
   ngOnInit()
   {
   }
   enter(frm:any){
   let res=false;
   this.companyService.Login(this.logIn.UserName,this.logIn.Password).subscribe(res=>
    
    {console.log(res)
   
    if(res==true)
     {
       console.log("yes");
     }
     else
  console.log("no");
})
 
   }
}