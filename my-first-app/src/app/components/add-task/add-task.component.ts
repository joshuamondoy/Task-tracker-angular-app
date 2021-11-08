import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
// when working with forms you want to add the fields as properties
text: string;
day: string;
remider: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
