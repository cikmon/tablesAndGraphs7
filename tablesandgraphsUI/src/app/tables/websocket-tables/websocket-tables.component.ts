import { Component, OnInit } from '@angular/core';
import {RestDataSource} from '../../service/rest.datasource';
import {Observable, timer, of} from 'rxjs';
import {RateToHryvnia} from '../../model/RateToHryvnia';
import {MessagingService} from '../../service/messaging.service';
import {log} from 'util';
import { Message } from '@stomp/stompjs';


@Component({
  selector: 'app-websocket-tables',
  templateUrl: './websocket-tables.component.html',
  styleUrls: ['./websocket-tables.component.css']
})

export class WebSocketTablesComponent implements OnInit {
  constructor(private restDataSourse: RestDataSource) { }
  private messagingService: MessagingService;
  users: Observable<RateToHryvnia[]>;
  public categories: string[] = ['January', 'Mach', 'August', 'November'];

  ngOnInit() {
    this.messagingService = new MessagingService(this.restDataSourse.getWebsocketURL(), this.restDataSourse.getWebSocketExampleURL());
    this.messagingService.stream().subscribe((message: Message) => {
      try {
        this.users = of(JSON.parse(message.body) as RateToHryvnia[]);
      } catch (e) {log(e); }

    });
  }


}


