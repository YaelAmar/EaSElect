import { Component } from "@angular/core";

@Component({
    selector: 'app-add-company',
    templateUrl: './addCompany.component.html',
    styleUrls: ['./addCompany.component.css']
  })
  export class AddCopmanyComponent {
  
    subscribe:any;
  
//    constructor(private  associationDetailsService:AssociationDetailsService){
//        this.subscribe=this.associationDetailsService.get().subscribe(d=>this.detailsAssociation=d);
//    }
  
   ngOnInit()
   {
  
   }

}