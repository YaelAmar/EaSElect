export class Company
{
    CompanyId:number
    CompanyName:string
    UserName:string
    Password:string
    DeleteRow:boolean

    constructor(companyName?:string,userName?:string,password?:string){
          this.CompanyName=companyName;
          this.UserName=userName;
          this.Password=password;
    }
}