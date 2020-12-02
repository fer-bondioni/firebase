import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  readonly url: string = 'https://fir-1-10829.firebaseio.com/';
  endpoint: string = '';

  setEndPoint(endpoint: string): string {
    this.endpoint = `${this.url}${endpoint}.json`;
    return this.endpoint;
  }

  constructor(private http: HttpClient) {}

  async get() {
    try {
      return await this.http.get(this.endpoint).toPromise();
    } catch (e) {
      console.log(e);
    }
  }

  async post(obj) {
    try {
      return await this.http.post(this.endpoint, obj).toPromise();
    } catch (e) {
      console.log(e);
    }
  }
}
