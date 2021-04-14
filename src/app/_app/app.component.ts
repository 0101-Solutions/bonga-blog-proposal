import { Component, OnInit } from '@angular/core';

// Below is the component decorator which takes 3 arguments.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// The main logic behind the App Component. The class implements the OnInit Lifecycle Hook.
// Mostly used and runs when everything is ready for initializing.
export class AppComponent implements OnInit {

  // Initializing the variables in the class if any and create the class instance. It can be 
  // parametized (can take parameters).
  constructor() {
    console.log('Parameters added.');
    
  }

  // Then we have to initalize the On Init Method to make it work.
  ngOnInit(): void {
    console.log('Component is initialized.');
    this.callMe();
  }

  // We create a private function to be called only within the class not outside this component.
  // It return nothing hence we say void.
  private callMe(): void {
    console.log('Then our private method is called.');
    
  }
  
  title: string = 'She Code Ng-Webinar';

  // Create an object.
  blogObject = {
    headline: "What is Typescript",
    description: `TypeScript is a language that is a superset of JavaScript: JS syntax is therefore legal TS. Syntax refers to the way we write text to form a program. For example, this code has a syntax error because it’s missing a ):`
  }

  linksArray = [
    "NodeJS For Beginners.",
    "Gatsby 101.",
    "How to Ace Your Technical Interview."
  ];

}
