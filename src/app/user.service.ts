import { Injectable } from '@angular/core';
import User from './User';
import Game from './Game';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class UserService {
    private usersUrl = 'api/users';
  users: User[];
  //user: User;

  getUsers(): Observable <User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  getUserById(id: number): Observable <User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<User>(url);
  }

  constructor(private http: HttpClient) { }
}
