import { Component, ViewChild, ElementRef } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { VoterService } from "../../Services/voter.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FileDetails } from "../../Models/FileDetails";

@Component({
    selector: 'app-add-voters',
    templateUrl: './addVoters.component.html',
    styleUrls: ['./addVoters.component.css']
  })
  export class AddVotersComponent  {
  
    subscribe:any;
    subscripion:Subscription
     electionId: number;
    @ViewChild('fileInput') fileInput:ElementRef;
     fileDetaild:FileDetails=new FileDetails();

    constructor(private voterService:VoterService,private route: ActivatedRoute,private router:Router){
      
    }
    ngOnInit() {
         this.subscripion=this.route.params.subscribe((params:any)=>{ 
         console.log(params['id'])
         this.electionId=params['id']
          });
     }
  
    public openFileDialog():void {
       let event = new MouseEvent('click', {bubbles: false});
       this.fileInput.nativeElement.dispatchEvent(event);
      }
    LoadDataVoters(e){   
      ////////////לסדר זה לא אמור להיות ככה!!!!!!!!!!!!!!!!!!!!!!!!!!
    // this.fileDetaild.FilePath=e.target.value;
    this.fileDetaild.FilePath="C:\\Users\\USER\\Desktop\\EaSElect\\tryfile.csv";
    this.fileDetaild.ElectionId=this.electionId;
    this.voterService.LoadDataVoters(this.fileDetaild).subscribe(result=>{
      if(result!=0)
      {
        console.log("load data succesfuly");
      }
    else 
    console.log("בחירות אלו לא קיימות ")
 
     });
 
    }

}