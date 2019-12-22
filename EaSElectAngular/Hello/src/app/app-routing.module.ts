import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './Components/LogIn/LogIn.component';
import { ElectionOptionComponent } from './Components/ElectionOption/ElectionOption.component';
import { AddElectionComponent } from './Components/AddElection/AddElection.component';
import { SignUpComponent } from './Components/SignUp/SignUp.component';
import { HomeComponent } from './Components/Home/Home.component';



export const appRoutes: Routes = [
   { path:'Home',component:HomeComponent},
   { path: 'AddElection/:id', component: AddElectionComponent,pathMatch: 'full' },
   { path: 'AddElectionOption/:id', component: ElectionOptionComponent },
   { path: 'LogIn', component: LogInComponent },
   { path: 'SignUp', component: SignUpComponent }
  ]

@NgModule({

  imports:[RouterModule.forRoot(appRoutes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}



