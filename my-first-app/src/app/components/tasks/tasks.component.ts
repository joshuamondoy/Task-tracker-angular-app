import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service'; // import the task service here
import {Task} from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private taskService: TaskService) { } // in order to use a service we need to add it as a provider in constructor

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => 
      (this.tasks = tasks)); //call the function from the service, this tasks is the array that we'll be looping in tasks.html
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => 
      (this.tasks = this.tasks.filter(t => t.id !== task.id)));
      //what happened here is we reset the value of tasks exept the task that has the id being selected, basically remove all the value of the tasks array then bring back all except single task with the id that's being selected upon click, filter make new array list from tasks array and remove the object that is being selected upon click.
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe()
    // set the value of task.reminder to the opposite value
  }

}
