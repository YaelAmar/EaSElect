import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LogInComponent } from './Components/LogIn/LogIn.component';
import { ElectionOptionComponent } from './Components/ElectionOption/ElectionOption.component';
import { AddCopmanyComponent } from './Components/AddCompany/Addcompany.component';
import { AddElectionComponent } from './Components/AddElection/AddElection.component';
import { SignUpComponent } from './Components/SignUp/SignUp.component';



export const appRoutes: Routes = [
   { path: 'AddCopmany', component: AddCopmanyComponent },
   { path: 'AddElection', component: AddElectionComponent },
   { path: 'ElectionOption', component: ElectionOptionComponent },
   { path: 'LogIn', component: LogInComponent },
   { path: 'SignUp', component: SignUpComponent },
];

@NgModule({

  imports:[RouterModule.forRoot(appRoutes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}



