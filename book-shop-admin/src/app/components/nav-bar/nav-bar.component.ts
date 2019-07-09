import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  private loggedIn;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.loggedIn = this.loginService.isLoggedIn();
  }

}
