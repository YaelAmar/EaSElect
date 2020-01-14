
import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
    selector: 'app-main',
    templateUrl: './Main.component.html',
    styleUrls: ['./Main.component.css']
  })
  
  export class MainComponent {

   constructor(private router:Router){
     }
  ngOnInit()
  {
    this.router.navigate(['/Home']);
  
  }
}