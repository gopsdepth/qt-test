import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  isError = false;

  constructor(private readonly router: Router) {}

  login(username: string, password: string) {
    if (username == 'admin' && password == 'test123') {
      this.router.navigate(['fund-list']);
    } else {
      this.isError = true;
    }
  }
}
