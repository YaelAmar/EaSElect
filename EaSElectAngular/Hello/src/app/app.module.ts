import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AddElectionComponent } from './Components/AddElection/AddElection.component';
import { ElectionOptionComponent } from './Components/ElectionOption/ElectionOption.component';
import { LogInComponent } from './Components/LogIn/LogIn.component';
import { CompanyService } from './Services/company.service';
import { ElectionOptionService } from './Services/electionOption.service';
import { ElectionService } from './Services/election.service';
import { ElectionResult } from './Models/electionResult.model';
import { TypeService } from './Services/type.service';
import { VoterService } from './Services/voter.service';
import { SignUpComponent } from './Components/SignUp/SignUp.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './Components/Home/Home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { HttpModule } from '@angular/http';
import { AddVotersComponent } from './Components/AddVoters/AddVoters.component';
import { MaterialModule } from './material.module';


import { FlexLayoutModule } from "@angular/flex-layout";
@NgModule({
  declarations: [
    AppComponent,
    AddElectionComponent,
    ElectionOptionComponent,
    LogInComponent,
    SignUpComponent,
    HomeComponent,
    AddVotersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
   ],

  providers: [
    CompanyService,
    ElectionOptionService,
    ElectionService,
    ElectionResult,
    TypeService,
    VoterService,
  ],
    
  bootstrap: [AppComponent]
  
})

export class AppModule { }

