import { Component } from "@angular/core";
import { CompanyService } from "../../Services/company.service";
import { Company } from "../../Models/company.model";

@Component({
    selector: 'app-signUp',
    templateUrl: './SignUp.component.html',
    styleUrls: ['./SignUp.component.css']
  })
  export class SignUpComponent {
    signUp:Company
    subscribe:any;
    res:boolean
   constructor(private  companyService:CompanyService){
   }
  
   ngOnInit()
   {
     
   }
   SignUp(){
    this.subscribe=this.companyService.SignUp().subscribe(d=>this.res=d);
       
   }
}