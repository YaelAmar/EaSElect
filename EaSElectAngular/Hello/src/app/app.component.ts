import { Component } from '@angular/core';
import { Model, ToDoItem } from './model';

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
