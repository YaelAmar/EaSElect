import { Component } from '@angular/core';
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

  isRegistered()
  {
    return (sessionStorage.getItem('companyId')!=null)
  }

  
}
