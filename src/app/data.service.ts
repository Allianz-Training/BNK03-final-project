import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  hasThirdParty: boolean = false;
  insuranceAccountNumber: string = '';

  private BACKEND_URI = 'http://localhost:8080';
  // private REST_API_SERVER = 'http://jsonplaceholder.typicode.com';

  caseDetail = {
    thirdPartyDetail: {},
    customerCaseDetail: {},
  };

  constructor(private httpClient: HttpClient) {}

  public get(route: string) {
    return this.httpClient.get(this.BACKEND_URI + route);
  }

  public post(route: string, body: any, header: any) {
    return this.httpClient.post(this.BACKEND_URI + route, body, header);
  }

  public put(route: string, body: any, header: any) {
    return this.httpClient.put(this.BACKEND_URI + route, body, header);
  }
}
