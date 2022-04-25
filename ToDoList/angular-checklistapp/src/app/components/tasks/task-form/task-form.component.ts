import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/shared/tasks.service';
import { NgForm } from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import { Task } from 'src/app/shared/task.model';
import { LookupService } from 'src/app/shared/lookup.service';
import { LTaskType } from 'src/app/shared/l-task-type.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styles: [
  ]
})
export class TaskFormComponent implements OnInit {

  constructor(public service: TasksService, private toastr: ToastrService, public lookupService:LookupService) { }
  lkTaskType:LTaskType[];

  ngOnInit(): void 
  {
    this.lookupService.getTaskType();
  }

  onSubmit(form:NgForm)
  {
    if(this.service.formData.pkTaskId ==0)
    {
      this.createNewTask(form);          
    }
    else
    {
     
      this.updateTask(form);
    }

  }

  createNewTask(form:NgForm)
  {
    this.service.createTask().subscribe(
      res=>{
        this.resetForm(form);
        this.toastr.success("Reminder Created","Reminder");
        this.service.getTasks();        
      }, 
      err=>{console.log(err)}
    )
  }

  updateTask(form:NgForm)
  {
    console.log("Update task");
    this.service.updateTask().subscribe(
      res=>{
        this.resetForm(form);
        this.toastr.info("Reminder Updated","Reminder");
        this.service.getTasks();
      },
      err=>{console.log(err)}
    );
  }

  resetForm(form:NgForm)
  {
    //Reset form
    form.form.reset();
    this.service.formData = new Task();
  }

  onClickReset(form:NgForm)
  {
    this.resetForm(form);
  }
}
