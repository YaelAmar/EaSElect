import { tick } from '@angular/core/src/render3';

export class detailsAssociation{
  NameOfAsscition :string =null ;
  DescriptionOfAsscition :string =null;
  YearEstablished :string =null;
  UserName :string =null;
  Password :string =null;
  DateCreated :Date=null; 
  AssociationNumber:number=null;
           
          constructor(nameOfAsscition?:string, descriptionofAsscition?:string, yearEstablished?:string,associationNumber?:number, userName?:string, password?:string,dateCreated?:Date){
            if(nameOfAsscition)
              this.NameOfAsscition=nameOfAsscition;
              else
              this.NameOfAsscition=null
              this.DescriptionOfAsscition=descriptionofAsscition;
              this.YearEstablished=yearEstablished;
              this.UserName=userName;
              this.Password=password;
              this.DateCreated=dateCreated;
              this.AssociationNumber=associationNumber;
          }
          
}