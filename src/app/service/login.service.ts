import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogin } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginUrl: string = "https://appcarceles1.herokuapp.com/api/login"
  constructor(private httpc: HttpClient) { }
  loginUser(email: string, password: string) {

    let objectLogin: UserLogin = { email, password }
    return this.httpc.post<any>(this.loginUrl, objectLogin);
  }
}