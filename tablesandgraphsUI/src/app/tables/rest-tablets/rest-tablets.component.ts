import {Component, OnInit} from '@angular/core';
import {RestDataSource} from '../../service/rest.datasource';

import {UserFullInformationModel} from '../../model/UserFullInformation.model';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {combineLatest, Observable, of} from 'rxjs';

@Component({
  selector: 'app-rest-tablets',
  templateUrl: './rest-tablets.component.html',
  styleUrls: ['./rest-tablets.component.css']
})
export class RestTabletsComponent implements OnInit {
  users: Observable<UserFullInformationModel[]>;
  filteredUsers$: Observable<UserFullInformationModel[]>;
  filter: FormControl = new FormControl('');
  filter$: Observable<string>;
  constructor(private restDataSourse: RestDataSource) {}
  ngOnInit() {this.users = this.restDataSourse.getUsers();

              this.filter$ = this.filter.valueChanges.pipe(startWith(''));
              this.filteredUsers$ = combineLatest(this.users, this.filter$).pipe(
      map(([states, filterString]) => states.filter(state => state.email.indexOf(filterString) !== -1))
    );

  }


  applyFilterEmail() {
    this.filter$ = this.filter.valueChanges.pipe(startWith(''));
    this.filteredUsers$ = combineLatest(this.users, this.filter$).pipe(
      map(([states, filterString]) => states.filter(state => state.email.toLowerCase().indexOf(filterString.toLowerCase()) !== -1))
    );
  }


  applyFilterFirstName() {
    this.filter$ = this.filter.valueChanges.pipe(startWith(''));
    this.filteredUsers$ = combineLatest(this.users, this.filter$).pipe(
      map(([states, filterString]) => states.filter(state => state.firstname.toLowerCase().indexOf(filterString.toLowerCase()) !== -1))
    );
  }

  applyFilterLastName() {
    this.filter$ = this.filter.valueChanges.pipe(startWith(''));
    this.filteredUsers$ = combineLatest(this.users, this.filter$).pipe(
      map(([states, filterString]) => states.filter(state => state.lastname.toLowerCase().indexOf(filterString.toLowerCase()) !== -1))
    );
  }
  applyFilterCity() {
    this.filter$ = this.filter.valueChanges.pipe(startWith(''));
    this.filteredUsers$ = combineLatest(this.users, this.filter$).pipe(
      map(([states, filterString]) => states.filter(state => state.city.toLowerCase().indexOf(filterString.toLowerCase()) !== -1))
    );
  }
  applyFilterStreet() {
    this.filter$ = this.filter.valueChanges.pipe(startWith(''));
    this.filteredUsers$ = combineLatest(this.users, this.filter$).pipe(
      map(([states, filterString]) => states.filter(state => state.street.toLowerCase().indexOf(filterString.toLowerCase()) !== -1))
    );
  }
  applyFilterHouse() {
    this.filter$ = this.filter.valueChanges.pipe(startWith(''));
    this.filteredUsers$ = combineLatest(this.users, this.filter$).pipe(
      map(([states, filterString]) => states.filter(state => state.house.toLowerCase().indexOf(filterString.toLowerCase()) !== -1))
    );
  }





}



