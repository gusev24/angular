import { Injectable } from '@angular/core';
import { User, UserRole, UserStatus } from '../model/user.model';
// import users from '../stubs/users';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  resourceUrl = `${environment.apiUrl}/people/`;
  constructor(
    private httpClient: HttpClient
  ) {
  }


  getUsers() {
    return this.httpClient.get(this.resourceUrl);
  }
}
