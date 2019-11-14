import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



export const appRoutes: Routes = [
  // { path: 'DetailsAssocition', component: DetailsAssocitionComponent },
  // { path: 'Members', component: MembersComponent },
  // { path: 'Invitation', component: InvitationComponent },
  // { path: 'CreateProtocol', component: CreateProtocolComponent },
  // { path: 'AddMember', component: AddMemberComponent },
  // { path: 'Meetings' ,component:MeetingsComponent}

];

@NgModule({

  imports:[RouterModule.forRoot(appRoutes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}



