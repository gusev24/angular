import { Injectable } from '@angular/core';
import { User, UserRole, UserStatus } from '../model/user.model';
import users from '../stubs/users';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }

  getUsers(): Observable<User[]> {
    return of(users);
  }
  getUser(id: number) {
    return of(users.find(user => user.id === id));
  }
}
