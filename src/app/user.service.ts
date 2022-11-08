import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from './classes/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private urlAPI: string = 'https://jsonplaceholder.typicode.com/users/';

  constructor(private http: HttpClient) {}

  getAllUsers() {
    return this.http.get<User[]>(this.urlAPI);
  }
}
