import { Component } from '@angular/core';

// Below is the component decorator which takes 3 arguments.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// The main logic behind the App Component 
export class AppComponent {
  title = 'shecodedemo';
}
