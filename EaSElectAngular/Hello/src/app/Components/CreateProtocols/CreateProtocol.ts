import { Component, OnInit } from '@angular/core';
import { member } from 'src/app/models/member.model';
import { generalProtocol } from 'src/app/models/general.protocol.model'
import { MemeberService } from 'src/app/services/MemberServices';
import { memberCriteria } from 'src/app/models/memberCriteria.model';
import { AssociationDetailsService } from 'src/app/services/AssociationDetailsServices';
import { ProtocolService } from 'src/app/services/ProtocolsServices';


@Component({
  selector: 'app-createProtocolComponent',
  templateUrl: './CreateProtocol.html',
  styleUrls: ['./CreateProtocol.css']
})
export class CreateProtocolComponent implements OnInit {

  members:member[]
  appointmentOfAccountantMembers:member[]
  subscribe:any
  subscribe2:any
  generalPrtocol:generalProtocol
  isAddMember:boolean
  isQuitMember:boolean
  isAuditCommittee:boolean
  isAppointmentAccountant:boolean
  isReports:boolean
  isEditAssociationDetail:boolean


  constructor(private memeberService:MemeberService,
    private  associationDetailsService:AssociationDetailsService,
    private protocolService:ProtocolService) { 
    this.subscribe=this.memeberService.get(new memberCriteria()).subscribe(m=>
      {
        this.members=m;
        this.appointmentOfAccountantMembers=m.filter(s=>s.TypeMember==true)
      })
    this.generalPrtocol=new generalProtocol();
    this.subscribe2=this.associationDetailsService.get().subscribe(s=>this.generalPrtocol.updateAssociationDetail=s)
  }

  ngOnInit() {
  }

  ngOnDestroy()
  {
    this.subscribe=null;
  }

  create()
  {
     this.protocolService.create(this.generalPrtocol).subscribe(x=>{});
  }
}
