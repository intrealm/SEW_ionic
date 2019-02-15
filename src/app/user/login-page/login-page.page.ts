import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  login()
  {
  	console.log(this.user);
  }

//TODO bring username from cache
  user={
  	username:'sourav'
  	,password:'pass'};

  error='';
}
