import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-my-first-component',
  templateUrl: './my-first-component.component.html',
  styleUrls: ['./my-first-component.component.scss']
})
export class MyFirstComponentComponent implements OnInit {
  users = [];
  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getUsers()
      .then(users => {
        this.users = users;
      });
  }


}
