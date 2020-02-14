import { Component } from "@angular/core";
import { CompanyService } from "../../Services/company.service";
import { Company } from "../../Models/company.model";
import { Router} from "@angular/router";
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-signUp',
    templateUrl: './SignUp.component.html',
    styleUrls: ['./SignUp.component.css']
  })
  export class SignUpComponent {
   
    newCompany:Company=new Company();
    confirmPass:string=this.newCompany.Password;


    
   constructor(private  companyService:CompanyService,private router: Router){
   }
  
   ngOnInit()
   {
  sessionStorage.setItem('enter','0');
   }
SignUp(frm:any){
  console.log(this.newCompany.CompanyName,this.newCompany.UserName,this.newCompany.Password);
  this.companyService.SignUp(this.newCompany).subscribe(companyId=>{
   //לקבל את הקוד חברה שנכנס עכשיו ולשלוח אותו להוספת בחירה
   this.newCompany.CompanyId=companyId; 
   if(companyId!=0)
    {
      sessionStorage.setItem('companyId',companyId.toString())
      this.router.navigate(['/Election']);
    }
   else 
   console.log("בחר שם אחר שם משתמש זה כבר קיים במערכת")
   });
   
  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
  let pass = group.get('password').value;
  let confirmPass = group.get('confirmPass').value;

  return pass === confirmPass ? null : { notSame: true }     
}
}