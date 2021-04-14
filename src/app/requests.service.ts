import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RequestsService {

  constructor(private http: HttpClient) { }

  public makeRequests(url: any): Promise<any> {

    return this.http.get(url).toPromise()
      .then((value) => {
        console.log(value);
        return value;        
      })
      .catch((error) => {
        return error;
      });
  };
}
