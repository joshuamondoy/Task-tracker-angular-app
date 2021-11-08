// since we are going to get values from header.html component we are going to import it here using Input
// Output and EventEmitter is for the onClick function 
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
// declare the input values here from header.html
@Input() text: string;
@Input() color: String;
// we are going to emmit the function upon clicking the btn so the function will not be declared here for the reusablitiy of this button component
@Output() btnClick = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.btnClick.emit();
  }

}
