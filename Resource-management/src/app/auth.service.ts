import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';

@Injectable()
export class AuthService {

  constructor(private http: Http) { }

  login(credentials) {
    return this.http.post('http://localhost:3000/users/login', credentials)
      .map(response => {
        let result = response.json();
        //console.log(result);
        if (result.error === 0 && result.token) {
          localStorage.setItem('token', result.token);
          return true;
        }
        return false;
      });
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    return tokenNotExpired();
  }

  get currentUsername() {
    let token = localStorage.getItem('token');
    //console.log("chamoda");
    //console.log(token);
    if (!token) {
      return null;
    }
    else {
      let jwthelper = new JwtHelper();
      let name = jwthelper.decodeToken(token).payload.firstname.concat(' ').concat(jwthelper.decodeToken(token).payload.lastname);
      return name;
    }
  }

  get currentUserId() {
    let token = localStorage.getItem('token');
    if (!token) {
      return null;
    }
    else {
      let jwthelper = new JwtHelper();
      let id = jwthelper.decodeToken(token).payload.id;
      return id;
    }
  }

  get currentUserfname() {
    let token = localStorage.getItem('token');
    if (!token) {
      return null;
    }
    else {
      let jwthelper = new JwtHelper();
      let firstname = jwthelper.decodeToken(token).payload.firstname;
      return firstname;
    }
  }

  get currentUserlname() {
    let token = localStorage.getItem('token');
    if (!token) {
      return null;
    }
    else {
      let jwthelper = new JwtHelper();
      let lastname = jwthelper.decodeToken(token).payload.lastname;
      return lastname;
    }
  }

  get currentUser() {
    let token = localStorage.getItem('token');
    let jwthelper = new JwtHelper();
    return jwthelper.decodeToken(token).payload;
  }

  register(data) {
    return this.http.post("http://localhost:3000/api/newapplication", data).map(response => {
      if (response) {
        return true;
      }
      else {
        return false;
      }
    })
  }
}
