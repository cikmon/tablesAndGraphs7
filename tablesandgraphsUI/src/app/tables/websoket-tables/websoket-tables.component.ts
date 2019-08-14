import { Component, OnInit } from '@angular/core';
import {RestDataSource} from '../../service/rest.datasource';
import {Observable, timer} from 'rxjs';
import {RateToHryvnia} from '../../model/RateToHryvnia';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-websoket-tables',
  templateUrl: './websoket-tables.component.html',
  styleUrls: ['./websoket-tables.component.css']
})
export class WebsoketTablesComponent implements OnInit {
  users: Observable<RateToHryvnia[]>;
  constructor(private restDataSourse: RestDataSource) { }

  ngOnInit() {

    timer(0, 3000).pipe(
      map(() => {this.users = this.restDataSourse.getRateToHryvnia(); })
    ).subscribe();
  }


  public series: any[] = [{
    name: "India",
    data: [3.907, 7.943, 7.848, 9.284]
  }, {
    name: "Russian Federation",
    data: [4.743, 7.295, 7.175, 6.376 ]
  }];
  public categories: string[] = ['January', 'Mach', 'August', 'November'];


}


