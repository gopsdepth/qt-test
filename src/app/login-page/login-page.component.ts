import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalGuard } from '../local.guard';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  isError = false;

  constructor(private readonly router: Router,
    private readonly guardService: LocalGuard) {}

  login(username: string, password: string) {
    if (username == 'admin' && password == 'test123') {
      this.guardService.loginSuccess();
      this.router.navigate(['fund-list']);
    } else {
      this.isError = true;
    }
  }
}
