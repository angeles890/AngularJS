import { Injectable } from '@angular/core';
import { Task } from './task.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http:HttpClient) { }
  formData: Task = new Task();
  readonly baseURL = 'https://localhost:44337/api';

  //POST
  // Task() Model
  createTask()
  {    
    return this.http.post(`${this.baseURL}/CheckListModels`, this.formData);
  }
}
