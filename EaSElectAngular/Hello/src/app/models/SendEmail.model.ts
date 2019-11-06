
export class SendEmail{
   pdf : File
   Subject : string
   Body : string
   memberCode : Array<number>

constructor(p?:File,s?:string,b?:string,m?:Array<number>)
{
this.pdf=p;
this.Subject=s;
this.Body=b;
this.memberCode=m;
}

}

