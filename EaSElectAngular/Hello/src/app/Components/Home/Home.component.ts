
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'app-home',
    templateUrl: './Home.component.html',
    styleUrls: ['./Home.component.css']
  })
  
  export class HomeComponent {
    subscribe:any
 
   constructor(private router:Router){
    }
  
   ngOnInit()
   {
    
   }
  LogIn(){
    this.router.navigate(['/LogIn']);
  }
   SignUp(){
    this.router.navigate(['/SignUp']);
   }
}