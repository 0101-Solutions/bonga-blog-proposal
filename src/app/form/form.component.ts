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

  // Here we create a userData Object that retrieves our user data, and displays 
  // in the createUser() fn.
  public userData = {
    email: '',
    password: ''
  }

  // Create a function to simple handle user data, which essentially returns nothing.
  public createUser(): void {
    // TODO: Add Data Binding when submit in form is called.
    console.log("Created User.");
    // Here we add data binding to our logs, where we bind what we get from our user and display it again.
    // Now we bind it to our front end.
    // The we use the banana boat...
    console.log("User Email: ", this.userData.email);
    console.log("User Password: ", this.userData.password);
    
    
  }

}
