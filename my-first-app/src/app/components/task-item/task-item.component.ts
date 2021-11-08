import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Task} from '../../Task'; //import the abstract Task class
import { faTimes } from '@fortawesome/free-solid-svg-icons'; // from the angular fontawesome
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  // toggle add task
  @Input() task: Task; // declare the task with the type of Task that is being pass from the tasks component
  // delete
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;
  // toggle reminder
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  
  onDelete(task) {
    this.onDeleteTask.emit(task);
  }

  onToggle(task) {
    this.onToggleReminder.emit(task);
    // console.log(task);
  }

}
