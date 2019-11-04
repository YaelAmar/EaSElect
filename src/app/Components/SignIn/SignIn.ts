import { Component } from '@angular/core';
import { detailsAssociation } from 'src/app/models/detailsAssociation.model';
import { AssociationDetailsService } from 'src/app/services/AssociationDetailsServices';
import { FormControl, Validators,FormGroup } from '@angular/forms';
import { toDate } from '@angular/common/src/i18n/format_date';
@Component({
    selector: 'app-signIn',
    templateUrl: './SignIn.html',
    styleUrls: ['./SignIn.css']
})
export class SignInComponent
{
    details:detailsAssociation=new detailsAssociation();
    subscribe:any;
    year=(new Date()).getFullYear();
    constructor(private associationDetailsService:AssociationDetailsService)
    { 
        this.subscribe=this.associationDetailsService.get().subscribe(d=>this.details=d);
    }

    ngOnInit()
    {
 
    }
    SignInDB(frm:any)
    {
     this.associationDetailsService.addOrEdit(this.details)
    }

//     checkPasswords(group: FormGroup) { // here we have the 'passwords' group
//     let pass = group.controls.password.value;
//     let confirmPass = group.controls.confirmPassword.value;

//     return pass === confirmPass ? null : { notSame: true }
//   }
    
}
