import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  hasThirdParty: boolean = false;
  insuranceAccountNumber:String | undefined ;

  private BACKEND_URI = "http://localhost:8080"
  private REST_API_SERVER = "http://jsonplaceholder.typicode.com";

  caseDetail = {
    "thirdPartyDetail":{},
    "customerCaseDetail":{}
  }

  constructor(private httpClient: HttpClient) { }

  public testGet(route: string){
    return this.httpClient.get(this.BACKEND_URI+route);
  }
}
