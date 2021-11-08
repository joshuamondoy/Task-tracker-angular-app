import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker'; // string interpolation databinding can call anything that return string or number like methods
  constructor() { }

  ngOnInit(): void {
  }

  // we initialize the function toggledAddTask() that we emitted from the button component
  // emmited by onClick() from button.html > import Output and EventEmitter and pass function to btnClick in button.ts > emit in header.html and pass to function toggleAddTask in here
  toggleAddTask() {
    console.log("Add task toggled");
  }

}
