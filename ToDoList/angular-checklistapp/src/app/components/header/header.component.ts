import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {
  title:string = 'To Do List';
  constructor() { }

  ngOnInit(): void {
  }

  toggleAddTask()
  {
    console.log('Toggle Add Task');
  }
}
