import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  isSignIn: boolean = false;
  hasThirdParty: boolean = false;
  insuranceAccountNumber: string = '';

  private BACKEND_URI =
    'http://ec2-18-141-12-241.ap-southeast-1.compute.amazonaws.com';
  private BACKEND_URI_LOCAL = 'http://localhost:8080';

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
