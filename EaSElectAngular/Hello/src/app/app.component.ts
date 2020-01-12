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

 
  getName() {
    return this.model.user;
  }

  getToDoItems() {
    return  this.model.items.filter(item => !item.done);
  }

  addItem(newItem) {
    if (newItem !== '') {
      this.model.items.push(new ToDoItem(newItem, false));
    }
  }

  
}
