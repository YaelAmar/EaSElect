import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './Components/LogIn/LogIn.component';
import { ElectionOptionComponent } from './Components/ElectionOption/ElectionOption.component';
import { AddElectionComponent } from './Components/AddElection/AddElection.component';
import { SignUpComponent } from './Components/SignUp/SignUp.component';
import { AddVotersComponent } from './Components/AddVoters/AddVoters.component';
import { ElectionComponent } from './Components/Election/Election.component';
import { EditElectionComponent } from './Components/EditElection/EditElection.component';
import { ResultsComponent } from './Components/Results/Results.component';
import { IdentifyVoterComponent } from './Components/IdentifyVoter/IdentifyVoter.component';
import { ChooseVoterComponent } from './Components/ChooseVoter/ChooseVoter.component';
import { VoterDetailsComponent } from './Components/VoterDetails/VoterDetails.component';
import { HomeComponent } from './Components/Home/Home.component';



export const appRoutes: Routes = [
   { path: 'AddElection/:id', component: AddElectionComponent,pathMatch: 'full' },
   { path: 'AddElectionOption', component: ElectionOptionComponent },
   { path: 'LogIn', component: LogInComponent },
   { path: 'SignUp', component: SignUpComponent },
   { path:'AddVoters',component:AddVotersComponent},
   { path:'Election',component:ElectionComponent,pathMatch:'full'},
   { path:'EditElection',component:EditElectionComponent,pathMatch:'full'},
   { path:'EditElection',component:EditElectionComponent,pathMatch:'full'},
   { path:'Results',component:ResultsComponent,pathMatch:'full'},
   { path:'IdentifyVoter/:id',component:IdentifyVoterComponent,pathMatch:'full'},
   { path:'ChooseVoter/:id',component:ChooseVoterComponent,pathMatch:'full'},
   { path:'VoterDetails/:id',component:VoterDetailsComponent},
   { path:'Home',component:HomeComponent} 


   
  ]

@NgModule({

  imports:[RouterModule.forRoot(appRoutes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}



