import { tick } from '@angular/core/src/render3';

export class jobMemberCriteria{
    CodeMember :number 
    NameJob :string 
    CodeJob :number 
    DateStart :Date   
    DateEnd :Date 
           
          constructor(codeMember?:number ,nameJob ?:string ,codeJob? :number ,dateStart ?:Date ,dateEnd? :Date){
              this.CodeMember=codeMember;
              this.NameJob=nameJob;
              this.CodeJob=codeJob;
              this.DateStart=dateStart;
              this.DateEnd=dateEnd;           
          }
}
 