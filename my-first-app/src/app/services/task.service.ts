import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'; // declare import the http client module here
import {Observable} from 'rxjs';
import {Task} from '../Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })

}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks' // this is the fake backend api
  constructor(private http:HttpClient) { } // use as constructors parameter

  // get task from fake api
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl) // this.http here is the private variable above
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url) // this is same as the http request we do in postman 

  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions); // put to update

  }

}

