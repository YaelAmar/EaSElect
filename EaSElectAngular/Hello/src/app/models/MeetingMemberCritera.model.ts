
export class MeetingMemberCriteria{
     codeMember :number 
     Subject:string 
     MeetingDate:Date 

constructor(codeMember :number, Subject?:string, MeetingDate?:Date )
{
    this.codeMember  =codeMember,
    this.Subject=Subject,
    this.MeetingDate=MeetingDate          
}      

    

        
}