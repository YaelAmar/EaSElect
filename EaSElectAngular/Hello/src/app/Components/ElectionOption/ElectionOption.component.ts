import { Component, Input } from "@angular/core";
import { ElectionOptionService } from "../../Services/electionOption.service";
import { ElectionOption } from "../../Models/electionOption.model";
import { Subscription } from "rxjs/Subscription";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-electionOption',
    templateUrl: './electionOption.component.html',
    styleUrls: ['./electionOption.component.css']
  })
  export class ElectionOptionComponent {
  
    subscribe:any;
    newElectionOption:ElectionOption=new ElectionOption();
    subscripion:Subscription
    @Input()
    electionId=this.newElectionOption.ElectionId

   constructor(private electionOptionService:ElectionOptionService,private route: ActivatedRoute,private router:Router){
     //  this.electionOptionService.get().subscribe(d=>this.detailsAssociation=d);
   }
  
   ngOnInit() {
    this.subscripion=this.route.params.subscribe((params:any)=>{ 
        console.log(params['id'])
        this.newElectionOption.ElectionId=params['id']
        });
   }
   AddElectionOption(frm:any){
    console.log(this.newElectionOption.ElectionOptionName,this.newElectionOption.ElectionId);
    this.electionOptionService.AddNewElectionOption(this.newElectionOption).subscribe(electionOptionId=>{
    this.newElectionOption.ElectionOptionId=electionOptionId;
     if(electionOptionId!=0)
     {
       console.log("succesfuly");
      // this.router.navigate(['/AddElectionOption',electionId]);
     }
   else 
   console.log("אופציית בחירה זו כבר קיימת בבחירות אלו")

    });

   }

   ngOnDestroy()
   {
    this.subscripion.unsubscribe();
   }
}