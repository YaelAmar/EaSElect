
import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
    selector: 'app-main',
    templateUrl: './Main.component.html',
    styleUrls: ['./Main.component.css']
  })
  
  export class MainComponent {
   // time = {hour: 13, minute: 30};
   constructor(private router:Router){
     }
  ngOnInit()
  {
    this.router.navigate(['/Home']);
  
  }
}