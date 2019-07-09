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
    if (this.loginService.isLoggedIn()) {
      this.loggedIn = true;
    }
  }

  onSubmit() {
    this.loginService.login(this.credentials.username, this.credentials.password)
                    .subscribe((user) => {
                      this.loginService.setLoggedIn();
                      location.reload();
                    });
  }

}
