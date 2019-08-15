import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() {
  }

  showComponent = 0;


  showHomeComponent() {
    this.showComponent = 0;
  }

  showRestTablesComponent() {
    this.showComponent = 1;
  }

  showWebSocketTablesComponent() {
    this.showComponent = 2;
  }

  ngOnInit(): void {
  }




}
