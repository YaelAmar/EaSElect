import { Component } from '@angular/core';
import { detailsAssociation } from 'src/app/models/detailsAssociation.model';
import { AssociationDetailsService } from 'src/app/services/AssociationDetailsServices';
import { LogIn } from 'src/app/models/logIn.model';
@Component({
    selector: 'app-logIn',
    templateUrl: './LogIn.html',
    styleUrls: ['./LogIn.css']
})

export class LogInComponent
{ logIn:LogIn
  constructor()
  {}

ngOnInit(logIn:LogIn)
{

}

}