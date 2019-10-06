import { tick } from '@angular/core/src/render3';

export class jobMember{
    Code :number 
    CodeMember :number 
    CodeJob :number 
    DateStart :Date
    DateEnd :Date
    Note :string 
    DateCreated :Date
    DeleteRow :Boolean

           
          constructor(code?:number,codeMember?:number,codeJob?:number, dateStart?:Date,  dateEnd?:Date, note?:string, dateCreated?:Date,
            deleteRow ?:Boolean){
              this.Code=code;
              this.CodeMember=codeMember;
              this.CodeJob=codeJob;
              this.DateStart=dateStart;
              this.DateEnd=dateEnd;
              this.Note=note;
              this.DateCreated=dateCreated;
              this.DeleteRow=deleteRow;
          }
}
 
 

    