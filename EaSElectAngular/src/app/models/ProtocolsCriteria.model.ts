export class ProtocolsCriteria
{
     DateMeeting:Date
     MonthMeeting :number
     SubjectMeeting :string
     MeetingDirector :string

     constructor(dateMeeting?:Date, monthMeeting ?:number,subjectMeeting ?:string, meetingDirector? :string)
     {
        this.DateMeeting=dateMeeting,
        this.MonthMeeting =monthMeeting,
        this.SubjectMeeting =subjectMeeting,
        this.MeetingDirector =meetingDirector
     }
    
}
