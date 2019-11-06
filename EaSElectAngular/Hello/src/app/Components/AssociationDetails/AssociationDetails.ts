import { Component } from '@angular/core';
import { detailsAssociation } from 'src/app/models/detailsAssociation.model';
import { AssociationDetailsService } from 'src/app/services/AssociationDetailsServices';
 

import { from } from 'rxjs';

@Component({
  selector: 'app-detailsAssociation',
  templateUrl: './AssociationDetails.html',
  styleUrls: ['./AssociationDetails.css']
})
export class DetailsAssocitionComponent {

 detailsAssociation:detailsAssociation=new detailsAssociation();
  subscribe:any;

 constructor(private  associationDetailsService:AssociationDetailsService){
     this.subscribe=this.associationDetailsService.get().subscribe(d=>this.detailsAssociation=d);
 }

 ngOnInit()
 {

 }

 ngOnDestroy()
 {
 this.subscribe=null;
 }

 addOrEdit()
 {
   this.associationDetailsService.addOrEdit(this.detailsAssociation);
  
 }

}
