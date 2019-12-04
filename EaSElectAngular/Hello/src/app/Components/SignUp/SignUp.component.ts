import { Component } from "@angular/core";
import { CompanyService } from "../../Services/company.service";
import { Company } from "../../Models/company.model";

@Component({
    selector: 'app-signUp',
    templateUrl: './SignUp.component.html',
    styleUrls: ['./SignUp.component.css']
  })
  export class SignUpComponent {
   
    company:Company=new Company();
    subscribe:any;
    res:boolean
   constructor(private  companyService:CompanyService){

   }
  
   ngOnInit()
   {
     
   }
   SignUp(frm:any){
    this.subscribe=this.companyService.SignUp(this.company.CompanyName,this.company.UserName,this.company.Password).subscribe(d=>this.res=d);
    //לקבל את הקוד חברה שנכנס עכשיו ולשלוח אותו להספת בחירה
     if(this.res==true)
      {
        console.log("succesfuly");
      }
    
   }
}