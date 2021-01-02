import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  hasThirdParty: boolean = false;
  insuranceAccountNumber: string = '';

  private BACKEND_URI =
    'http://ec2-54-179-82-140.ap-southeast-1.compute.amazonaws.com';

  caseDetail = {
    thirdPartyDetail: {},
    customerCaseDetail: {},
  };

  constructor(private httpClient: HttpClient) {}

  public get(route: string, header: any) {
    return this.httpClient.get(this.BACKEND_URI + route, header);
  }

  public post(route: string, body: any, header: any) {
    return this.httpClient.post(this.BACKEND_URI + route, body, header);
  }

  public put(route: string, body: any, header: any) {
    return this.httpClient.put(this.BACKEND_URI + route, body, header);
  }
}
