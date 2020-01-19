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
    //@ViewChild('fileInput', {  }) fileInput:ElementRef;
     fileDetails:FileDetails=new FileDetails();
     uploadUrl:string;


    constructor(private voterService:VoterService,private route: ActivatedRoute,private router:Router){
      
    }
    ngOnInit() {
         this.subscripion=this.route.params.subscribe((params:any)=>{ 
         console.log(params['id'])
         this.electionId=params['id']
        this.uploadUrl = `http://localhost:55866/api/voters/loadDataVoters/${this.electionId}`
          });
     }
     localUrl:any[];
    // public openFileDialog():void {
    //    let event = new MouseEvent('click', {bubbles: false});
    //    this.fileInput.nativeElement.dispatchEvent(event);
    //   }
    LoadDataVoters(event:any){   
      
      ////////////לסדר זה לא אמור להיות ככה!!!!!!!!!!!!!!!!!!!!!!!!!!
     //this.fileDetails.FilePath=e.target.value;
     console.log(this.localUrl[0])
    //this.fileDetaild.FilePath="C:\\Users\\USER\\Desktop\\EaSElect\\tryfile.csv";
   
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
          this.localUrl = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
  }
   
   
   
    this.fileDetails.ElectionId=this.electionId;
    this.voterService.LoadDataVoters(this.fileDetails).subscribe(result=>{
      if(result!=0)
      {
        console.log("load data succesfuly");
      }
    else 
    console.log("בחירות אלו לא קיימות ")
 
     });
 
    }

}