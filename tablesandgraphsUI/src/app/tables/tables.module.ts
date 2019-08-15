import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RestDataSource} from '../service/rest.datasource';
import {RouterModule} from '@angular/router';
import {WebGuard} from '../web.guard';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RestTabletsComponent } from './rest-tablets/rest-tablets.component';
import { WebSocketTablesComponent } from './websocket-tables/websocket-tables.component';
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';

@NgModule({
  declarations: [
     HomeComponent, RestTabletsComponent, WebSocketTablesComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, ReactiveFormsModule, ChartsModule,
    RouterModule.forChild([
      {path: 'home', component: HomeComponent
        // , canActivate: [WebGuard]
      },
    ]),


  ],
  providers: [RestDataSource, WebGuard],
  bootstrap: [HomeComponent]
})
export class TablesModule { }
