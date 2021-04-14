import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  // In order to create forms that do not refresh and reload our page content, 
  // we need a special module called FormsModule, to handle the forms and 
  // Reactive forms Module to helps us avert this problem.

  // Create a function to simple handle user data, which essentially returns nothing.
  private createUser(): void {
    // TODO: Add Data Binding when submit in form is called.
    console.log("Created User.");
    
  }

}
