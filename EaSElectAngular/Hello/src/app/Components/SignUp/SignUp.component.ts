import { Component } from "@angular/core";

@Component({
    selector: 'app-signUp',
    templateUrl: './SignUp.component.html',
    styleUrls: ['./SignUp.component.css']
  })
  export class SignUpComponent {
  
    subscribe:any;
  
//    constructor(private  associationDetailsService:AssociationDetailsService){
//        this.subscribe=this.associationDetailsService.get().subscribe(d=>this.detailsAssociation=d);
//    }
  
   ngOnInit()
   {
  
   }
}