import { Component, OnInit } from '@angular/core';
import { member } from 'src/app/models/member.model';
import { memberCriteria } from 'src/app/models/memberCriteria.model';
import { MemeberService } from 'src/app/services/MemberServices';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-members',
  templateUrl: './Members.html',
  styleUrls: ['./Members.css']
})
export class MembersComponent implements OnInit {
  members: member[]
  subscribe: any
  criteria: memberCriteria = new memberCriteria();
  newMember:member
  tempTypeMember:string
  tempAllowSignature:string
  //לצורך הוספת חבר, כאשר זה false סימן שלא רוצים עדין להוסיף.
  toAddMember: boolean = false

  constructor(private memberService: MemeberService) {
    this.subscribe = this.memberService.get(this.criteria).subscribe(m => this.members = m)
  }

  IsAllowSignature(isAllow: boolean) {
    if (isAllow)
      return 'כן';
    return 'לא';
  }

  WhatTypeMember(type: boolean) {
    if (type)
      return "פנימי"
    return "חיצוני"
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscribe = null;
  }

  searchInMembers(frm: any) {
    if(this.tempTypeMember=='חיצוני')
    this.criteria.TypeMember=false
    if(this.tempTypeMember=='פנימי')
    this.criteria.TypeMember=true
    if(this.tempAllowSignature=='כן')
    this.criteria.TypeMember=true
    if(this.tempAllowSignature=='לא')
    this.criteria.TypeMember=false
    this.subscribe = this.memberService.get(this.criteria).subscribe(m => this.members = m)
  }

  addingMember()
  {
    this.toAddMember=false
    this.newMember.deleteRow=false
    //create the add function in the server
    
  }

  exportExcel()
  {
    this.memberService.exportMembers().subscribe(s=>{this.downloadFile(s)});
  }

  
  downloadFile(data: any) {
    const replacer = (key, value) => value === null ? '' : value; // specify how you want to handle null values here
    const header = Object.keys(data[0]);
    let csv = data.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','));
    csv.unshift(header.join(','));
    let csvArray = csv.join('\r\n');

    var blob = new Blob([csvArray], {type: 'text/csv' })
    saveAs(blob, "myFile.csv");
}

}
