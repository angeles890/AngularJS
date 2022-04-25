import { Injectable } from '@angular/core';
import { Task } from './task.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http:HttpClient) { }

  readonly baseURL = 'https://localhost:44337/api';
  formData: Task = new Task();  
  taskList: Task[];

  //POST
  // Task() Model
  createTask()
  {    
    return this.http.post(`${this.baseURL}/CheckListModels`, this.formData);
  }

  //PUT
  //api/CheckListModels/5
  updateTask()
  {
    return this.http.put(`${this.baseURL}/CheckListModels/${this.formData.pkTaskId}`,this.formData);
  } 

  // GET
  // api/Tasks
  getTasks()
  {
    console.log('Get Tasks fired');
    // make GET requests and load list(of Task());
    this.http.get(`${this.baseURL}/CheckListModels`).toPromise()
    .then(res=> this.taskList = res as Task[]);
  }
}
