import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AddElectionComponent } from './Components/AddElection/AddElection.component';
import { AddCopmanyComponent } from './Components/AddCompany/Addcompany.component';
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

@NgModule({
  declarations: [
    AppComponent,AddElectionComponent,AddCopmanyComponent,ElectionOptionComponent,LogInComponent,SignUpComponent
  ],
  imports: [
    BrowserModule, FormsModule,AppRoutingModule,HttpClientModule
  ],
  providers: [CompanyService,ElectionOptionService,ElectionService,ElectionResult,TypeService,VoterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
