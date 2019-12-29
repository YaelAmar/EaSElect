import { Component } from "@angular/core";
import { CompanyService } from "../../Services/company.service";
import { Company } from "../../Models/company.model";
import { Router} from "@angular/router";

@Component({
    selector: 'app-signUp',
    templateUrl: './SignUp.component.html',
    styleUrls: ['./SignUp.component.css']
  })
  export class SignUpComponent {
   
    newCompany:Company=new Company();
    confirmPass:string=this.newCompany.Password;
    subscribe:any;
    res:boolean
  
   constructor(private  companyService:CompanyService,private router: Router){
  
   }
  
   ngOnInit()
   {
     
   }
   SignUp(frm:any){
   console.log(this.newCompany.CompanyName,this.newCompany.UserName,this.newCompany.Password);
    //frm.method = "POST";   
   // document.body.appendChild(frm);
    this.companyService.
    (this.newCompany).subscribe(res=>{
    //לקבל את הקוד חברה שנכנס עכשיו ולשלוח אותו להוספת בחירה
    this.newCompany.CompanyId=res; 
    if(res!=0)
      {
        console.log("succesfuly");
       // this.router.navigate(['/AddElection']);
     }
    else 
    console.log("בחר שם אחר שם משתמש זה כבר קיים במערכת")
    });
    
   }
}