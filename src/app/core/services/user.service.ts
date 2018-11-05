import { Injectable } from '@angular/core';
import { User, UserRole, UserStatus } from '../model/user.model';
import { promise } from 'protractor';
import users from '../stubs/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }

  getUsers() {
    return Promise.resolve(users);
  }
}
