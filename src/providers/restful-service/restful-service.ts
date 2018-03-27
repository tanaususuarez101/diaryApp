import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RestfulServiceProvider {

  private baseURL="../assets/data";
  constructor(public http: HttpClient) {
  }

  getNote(){
    return this.http.get(this.baseURL);
  }
  postRequest(postParams) {
    console.log("Ha pasado por aqui");
    this.http.post(this.baseURL, postParams, {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      withCredentials: true
    })
  }
}
