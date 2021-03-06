import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RestDataSource} from './service/rest.datasource';
import {LoginComponent} from './login/login.component';
import {RouterModule} from '@angular/router';
import {WebGuard} from './web.guard';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TablesModule} from './tables/tables.module';
import {TokenInterceptor} from './service/token.interceptor';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent, LoginComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule, ReactiveFormsModule, TablesModule,
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent, canActivate: [WebGuard]},
      { path: 'home', loadChildren: './tables/tables.module'},
      {path: '**', redirectTo: 'login', pathMatch: 'full'}
    ]),
     BrowserAnimationsModule,
    ServiceWorkerModule.register('/ngsw-worker.js',
      { enabled: environment.production })

  ],
  providers: [RestDataSource, WebGuard, {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
