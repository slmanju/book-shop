import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(username: String, password: String) {
    return of({ username: 'Manjula' });
  }

  isLoggedIn() {
    let value = localStorage.getItem("loggedIn");
    return value == "1";
  }

  setLoggedIn() {
    localStorage.setItem("loggedIn", "1");
  }

}
