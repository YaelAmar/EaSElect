import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';

export class member
{
codeMember:number=11111;
NameMember:string="aaa";
TypeMember ?:boolean=false;
IdMember:string="11";
AllowedSignature:boolean=false;
MailMember:string="111@@@";
JoinDate:Date;
ExitDate:Date;
DateCreated ?:Date;
deleteRow ?:boolean=false;


constructor(c?:number,nm?:string,ty?:boolean,id?:string,as?:boolean,mail?:string,join?:Date,ex?:Date,dc?:Date,dr?:boolean)
{
    this.codeMember=c;
    this.NameMember=nm;
    this.TypeMember=ty;
    this.IdMember=id;
    this.AllowedSignature=as;
    this.MailMember=mail;
    this.JoinDate=join;
    this.ExitDate=ex;
    this.DateCreated=dc;
    this.deleteRow=dr;
}
}