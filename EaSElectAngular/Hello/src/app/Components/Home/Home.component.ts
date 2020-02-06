
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
   // sessionStorage.setItem('companyId','0');

   }
  LogIn(){
sessionStorage.setItem('enter','3')
    this.router.navigate(['/LogIn']);
  }
   SignUp(){
sessionStorage.setItem('enter','3')
    this.router.navigate(['/SignUp']);
   }
}