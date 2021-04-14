import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../requests.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public mathString: any;

  constructor(private request: RequestsService) { 
    this.request.makeRequests('https://swapi.dev/api/planets/9').then((val) => {
      this.mathString = val;  
    }).catch(err => console.log(err));

   }

  ngOnInit(): void {
  }

  public makeRequest() {
    this.request.makeRequests('https://swapi.dev/api/planets/9').then((val) => {
      this.mathString = val;
      
    }).catch(err => console.log(err));  }

}
