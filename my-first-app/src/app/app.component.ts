import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // the div where we embed the components, you can also select attributes like .class or [attribute-name] here but not id
  templateUrl: './app.component.html', // the app html file
  styleUrls: ['./app.component.css'] // the app css file
})

// class where we put any properties of components and custom methods
export class AppComponent {
 
}
