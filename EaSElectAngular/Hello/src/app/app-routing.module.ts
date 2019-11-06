import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './Components/SignIn/SignIn';


export const appRoutes: Routes = [
 // { path: 'DetailsAssocition', component: DetailsAssocitionComponent },
 // { path: 'Members', component: MembersComponent },
  //{ path: 'Invitation', component: InvitationComponent },
 // { path: 'CreateProtocol', component: CreateProtocolComponent }
];

@NgModule({

  imports:[RouterModule.forRoot(appRoutes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}



