import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsAssocitionComponent } from './Components/AssociationDetails/AssociationDetails';
import { SignInComponent } from './Components/SignIn/SignIn';
import { MembersComponent } from './Components/Members/Members';
import { InvitationComponent } from './Components/Invitation/Invitation';
import { CreateProtocolComponent } from './Components/CreateProtocols/CreateProtocol';

export const appRoutes: Routes = [
  { path: 'DetailsAssocition', component: DetailsAssocitionComponent },
  { path: 'Members', component: MembersComponent },
  { path: 'Invitation', component: InvitationComponent },
  { path: 'CreateProtocol', component: CreateProtocolComponent }
];

@NgModule({

  imports:[RouterModule.forRoot(appRoutes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}



