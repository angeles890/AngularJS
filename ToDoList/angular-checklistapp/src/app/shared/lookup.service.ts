import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LTaskType } from './l-task-type.model';

@Injectable({
  providedIn: 'root'
})
export class LookupService {

  constructor(private http: HttpClient) { }

  readonly baseURL = "https://localhost:44337/api";
  taskTypeList: LTaskType[];

  getTaskType()
  {
    this.http.get('https://localhost:44337/api/LTaskTypes')
    .toPromise()
    .then()
    .then(res=> this.taskTypeList = res as LTaskType[]);
  }
}
