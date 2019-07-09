import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private credentials = { username: '', password: '' };
  private loggedIn = false;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.credentials);
    this.loginService.login(this.credentials.username, this.credentials.password)
                    .subscribe(() => {
                      this.loggedIn = true;
                    });
  }

}
