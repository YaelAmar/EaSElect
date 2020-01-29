
import { Component } from '@angular/core';
import { LogIn } from '../../Models/Login.model';
import { CompanyService } from '../../Services/company.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
    selector: 'app-logIn',
    templateUrl: './LogIn.component.html',
    styleUrls: ['./LogIn.component.css']
  })
  
  export class LogInComponent {
    logIn:LogIn=new LogIn();
    subscribe:any
    loginForm:FormGroup

   
   constructor(private  companyService:CompanyService,private router: Router){
     }
  
   
    
  
   ngOnInit()
   {
   }
   enter(frm:any){
   let res=false;
   this.companyService.Login(this.logIn.UserName,this.logIn.Password).subscribe(companyId=>
    {
    if(companyId!=0)
     {

      sessionStorage.setItem('companyId',companyId.toString())
      this.router.navigate(['/EditElection']);
     }
     else
  console.log("no");
})
 
   }
}