import { Component, ChangeDetectorRef } from '@angular/core';
import { Model, ToDoItem } from './model';
import '@vaadin/vaadin-button';
import '@vaadin/vaadin-grid';
import '@vaadin/vaadin-text-field';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model = new Model();
  title = 'אתר הבחירות שיחסוך לכם זמן וכח';

  WhichScreen()
  {
  
   if(sessionStorage.getItem('companyId')!=null)
   return 2
   else if(sessionStorage.getItem('enter')!=null)
   return 3
   else if(sessionStorage.getItem('voter')!=null)
   return 4
   else 
   return 1
   
  }
 ngOnInit()
 {
   
   sessionStorage.clear();
 }
  
}
