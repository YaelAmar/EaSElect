
export class memberCriteria
{
    NameMember:string;
    IdMember:string;
    TypeMember ?:boolean;
    AllowedSignature?:boolean;
    MailMember:string;
    JoinDate:Date;
    ExitDate:Date;

    constructor(c?:number,nm?:string,ty?:boolean,id?:string,as?:boolean,mail?:string,join?:Date,ex?:Date)
    {
        this.NameMember=nm;
        this.TypeMember=ty;
        this.IdMember=id;
        this.AllowedSignature=as;
        this.MailMember=mail;
        this.JoinDate=join;
        this.ExitDate=ex;
    }
}



