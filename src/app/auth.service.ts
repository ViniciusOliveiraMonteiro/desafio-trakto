import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuthenticated(): boolean {
    if (!window.localStorage.getItem('DATA_USER')) {
      return false;
    }
    const { access_token: token } = JSON.parse(window.localStorage.getItem('DATA_USER') || "");
    return token ? true : false;
  }
}
