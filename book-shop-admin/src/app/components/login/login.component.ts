import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private credentials = { username: '', password: '' };
  private loggedIn = false;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.loggedIn = this.loginService.isLoggedIn();
  }

  onSubmit() {
    this.loginService.login(this.credentials.username, this.credentials.password)
                    .subscribe((user) => {
                      this.loginService.setLoggedIn();
                      this.router.navigate(['/'])
                                  .then(() => location.reload());
                    });
  }

}
