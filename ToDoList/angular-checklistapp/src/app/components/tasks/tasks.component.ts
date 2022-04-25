import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/shared/tasks.service';
import { Task } from 'src/app/shared/task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styles: [
  ]
})
export class TasksComponent implements OnInit {

  constructor(public service: TasksService) { }

  ngOnInit(): void {
    this.service.getTasks();
  }

  onClick(selectedTask:Task)
  {
    console.log(selectedTask.fkTaskTypeId);
    this.service.formData = Object.assign({},selectedTask);
  }
}
