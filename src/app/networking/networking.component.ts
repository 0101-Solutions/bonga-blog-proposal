import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-networking',
  templateUrl: './networking.component.html',
  styleUrls: ['./networking.component.css']
})
export class NetworkingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
      
  title: string = '';

  blogData = {
    subject: 'System of Systems (SoS) Management: A Network Approach.',
    headline: "What is the ISO Network Management Approach",
    description: `
      The ISO model defines five conceptual areas for managing networks: performance, configuration, accounting, fault, and security. This model is both a standard and primary means for understanding the major functions of network management. The Boardman-Sauser characteristics of autonomy, belonging, connectivity, diversity, and emergence are used to recognize a SoS. These characteristics represent the fundamental "building blocks " of SoS management.
    `,
    relatedLinks: [
      "Dynamic Reasoning Architecture For Network Management.",
      "OSI Model",
      "Variable Length Subnet Mask."
    ]
  }


}
