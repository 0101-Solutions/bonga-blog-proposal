import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  @Input() blogData: any;

  constructor() { }

  ngOnInit(): void {
  }

}
