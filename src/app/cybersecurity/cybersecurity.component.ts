import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cybersecurity',
  templateUrl: './cybersecurity.component.html',
  styleUrls: ['./cybersecurity.component.css']
})
export class CybersecurityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
      
  title: string = 'Hacking';

  // Create an object.
  blogObject = {
    headline: "What is Hacking",
    description: `
    Hacking is satisfying one’s curiosity.

    Hacking is finding a way to accomplish a goal, never accepting no for an answer, and being more persistent and patient than anyone else.
    
    Hacking is pushing technology to its limits and making technology more resilient through testing, tinkering, and exploration.
    
    Hacking is a mindset, a culture, a spirit, and the execution of creative problem-solving.
  `
  }

  linksArray = [
    "Defending Linux From Attacks.",
    "Security-as-a-service.",
    "Security Awareness Training."
  ];

}
