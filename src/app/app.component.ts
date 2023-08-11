import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'csf_workshop32';

  todoList: any[] = [];

  updateList(newItem: any) {
    console.log('App received item from Output(): ');
    console.log("newItem: " + newItem);

    this.todoList.push(newItem);
    console.log("todoList: " + this.todoList);
  }
}
