
import { from } from 'rxjs';
import {quitMember } from '../models/quit.member.model'
import {choosingAuditCommittee } from '../models/Choosing.audit.committee.model'
import {appointmentOfAccountant } from '../models/Appointment.of.accountant.model'
import {confirmReports } from '../models/confirm.reports.model'
import { updateAssociationDetail} from './update.association.detail.model'
import { other} from './other.model'
import { member } from './member.model';
import { detailsAssociation } from './detailsAssociation.model';

export class generalProtocol{
    Presents:Array<number>  
    Tasks:Array<number>   
    MeetingType:number 
    Signaturers:Array<number> 
    Date:Date  

    AddMember:member=new member();
    QuitMember:number 
    AuditCommitteeMembers :Array<number>=new Array<number>();
    Accountant:number  
    confirmReports:string
    updateAssociationDetail:detailsAssociation=new detailsAssociation();  
    Other:string

     //NewMember:Array<Members>  
    //  QuitMember:quitMember 
    //  AuditCommitteeMembers:choosingAuditCommittee  
    //  Accountant:appointmentOfAccountant  
    //  confirmReports:confirmReports   
    //  updateAssociationDetail:updateAssociationDetail   
    //  Other:other
}