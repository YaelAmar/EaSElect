import { Component, Input } from '@angular/core';

import { jobMember } from 'src/app/models/jobMember.model';
import { JobMemeberService } from 'src/app/services/JobMemeberService';
import { jobMemberCriteria } from 'src/app/models/jobMemberCriteria.model';

@Component({
  selector: 'app-jobMember',
  templateUrl: './JobMember.html',
  styleUrls: ['./JobMember.css']
})

export class jobMemberComponent {

    jobMember:jobMember[]
    subscribe:any;

    @Input()
    codeMember:number

    criteria:jobMemberCriteria=new jobMemberCriteria();

    constructor(private jobMemberServive:JobMemeberService){
      this.criteria.CodeMember=this.codeMember;
        this.subscribe=this.jobMemberServive.get(this.criteria).subscribe(j=>this.jobMember=j)
    }

    ngOnInit()
    { }
   
    ngOnDestroy()
    {
    this.subscribe=null;
    }
 
}
