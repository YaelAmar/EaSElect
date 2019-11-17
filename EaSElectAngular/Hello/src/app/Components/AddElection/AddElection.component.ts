import { Component } from "@angular/core";

@Component({
    selector: 'app-add-election',
    templateUrl: './addElection.component.html',
    styleUrls: ['./addElection.component.css']
  })
  export class AddElectionComponent {
  
    subscribe:any;
  
//    constructor(private  associationDetailsService:AssociationDetailsService){
//        this.subscribe=this.associationDetailsService.get().subscribe(d=>this.detailsAssociation=d);
//    }
  
   ngOnInit()
   {
  
   }
}