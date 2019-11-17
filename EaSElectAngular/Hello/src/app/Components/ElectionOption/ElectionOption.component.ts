import { Component } from "@angular/core";

@Component({
    selector: 'app-electionOption',
    templateUrl: './electionOption.component.html',
    styleUrls: ['./electionOption.component.css']
  })
  export class ElectionOptionComponent {
  
    subscribe:any;
  
//    constructor(private  associationDetailsService:AssociationDetailsService){
//        this.subscribe=this.associationDetailsService.get().subscribe(d=>this.detailsAssociation=d);
//    }
  
   ngOnInit()
   {
  
   }
}