import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-softwareengineering',
  templateUrl: './softwareengineering.component.html',
  styleUrls: ['./softwareengineering.component.css']
})
export class SoftwareengineeringComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
