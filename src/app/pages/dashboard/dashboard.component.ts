import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

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
