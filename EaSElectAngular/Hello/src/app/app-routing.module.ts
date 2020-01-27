import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './Components/LogIn/LogIn.component';
import { ElectionOptionComponent } from './Components/ElectionOption/ElectionOption.component';
import { AddElectionComponent } from './Components/AddElection/AddElection.component';
import { SignUpComponent } from './Components/SignUp/SignUp.component';
import { HomeComponent } from './Components/Home/Home.component';
import { AddVotersComponent } from './Components/AddVoters/AddVoters.component';
import { ElectionComponent } from './Components/Election/Election.component';
import { EditElectionComponent } from './Components/EditElection/EditElection.component';



export const appRoutes: Routes = [
   { path: 'AddElection/:id', component: AddElectionComponent,pathMatch: 'full' },
   { path: 'AddElectionOption', component: ElectionOptionComponent },
   { path: 'LogIn', component: LogInComponent },
   { path: 'SignUp', component: SignUpComponent },
   { path:'AddVoters',component:AddVotersComponent},
   { path:'Election',component:ElectionComponent,pathMatch:'full'},
   { path:'EditElection',component:EditElectionComponent,pathMatch:'full'}

   
  ]

@NgModule({

  imports:[RouterModule.forRoot(appRoutes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}



