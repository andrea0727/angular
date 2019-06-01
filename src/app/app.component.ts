import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model = {};
  apiRoot: string = 'https://api.github.com/users/';
  
  constructor(private loginService: LoginService){}
  
  login(form: any) {
    this.model = form;
    console.log(this.model);
    this.loginService
      .getResponse(`${this.apiRoot}${this.model['username']}/repos`)
      .subscribe(
      response => (this.reposList = response),
      error => (console.log('Ups! we have an error: ', error))
      )
  }
  
} 
