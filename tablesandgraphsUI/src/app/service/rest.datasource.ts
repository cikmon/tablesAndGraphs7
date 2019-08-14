import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';


import {HttpClient} from '@angular/common/http';
import {UserFullInformationModel} from '../model/UserFullInformation.model';
import {RateToHryvnia} from '../model/RateToHryvnia';





// @ts-ignore
@Injectable()
export class RestDataSource {

   constructor(private http: HttpClient) {
  }

  baseUrl = 'http://localhost:8080/';
  login(loginPayload) {
    const headers = {
      Authorization: 'Basic ' + btoa('devglan-client:devglan-secret'),
      'Content-type': 'application/x-www-form-urlencoded'
    };
    return this.http.post('http://localhost:8080/' + 'oauth/token', loginPayload, {headers});
  }


  getUsers(): Observable<UserFullInformationModel[]> {
    return this.http.get<UserFullInformationModel[]>(
      this.baseUrl + 'api/getUsersinformation?access_token=' + JSON.parse(window.sessionStorage.getItem('token'))
        .access_token); }

  getRateToHryvnia(): Observable<RateToHryvnia[]> {
    return this.http.get<RateToHryvnia[]>(
      this.baseUrl + 'api/getRateToHryvnia?access_token=' + JSON.parse(window.sessionStorage.getItem('token'))
        .access_token); }

}

