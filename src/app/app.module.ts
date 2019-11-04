import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AssociationDetailsService } from './services/AssociationDetailsServices';
import { DetailsAssocitionComponent } from './Components/AssociationDetails/AssociationDetails';
import{FirstPageComponent}from './Components/FirstPage/FirstPage';
import {SignInComponent} from './Components/SignIn/SignIn';
import { jobMemberComponent } from './Components/JobMember/JobMember';
import { JobMemeberService } from './services/JobMemeberService';
import {LogInComponent} from './Components/LogIn/LogIn';
import { MembersComponent } from './Components/Members/Members';
import { MemeberService } from './services/MemberServices';
import { MeetingsComponent } from './Components/Meetings/Meetings';
import { InvitationComponent } from './Components/Invitation/Invitation';
import { MeetingsService } from './services/MeetingsService';
import { MeetingsMemberComponent } from './Components/MeetingsMember/MeetingsMember';
import { CreateProtocolComponent } from './Components/CreateProtocols/CreateProtocol';
import { AppRoutingModule } from './app-routing.module';
import { ProtocolService } from './services/ProtocolsServices';


@NgModule({
  declarations: [
    AppComponent,DetailsAssocitionComponent,FirstPageComponent,SignInComponent,jobMemberComponent,LogInComponent,MembersComponent,MeetingsComponent,InvitationComponent,MeetingsMemberComponent,CreateProtocolComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule, ReactiveFormsModule, FormsModule,HttpClientModule
  ],
  providers: [AssociationDetailsService,JobMemeberService,MemeberService,MeetingsService,ProtocolService],
  bootstrap: [AppComponent]
})


export class AppModule { }
