import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private creadentails = { username: '', password: '' };
  private loggedIn = false;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.loginService.login(this.creadentails.username, this.creadentails.password)
                    .subscribe(() => {
                      this.loggedIn = true;
                    });
  }

}
