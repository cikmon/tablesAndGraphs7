import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {UserFullInformationModel} from '../model/UserFullInformation.model';


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
  getWebsocketURL(): string {
    return 'ws://localhost:8080/socket?access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token;
  }
  getWebSocketExampleURL(): string {
    return '/topic/server-broadcaster';
  }

}

