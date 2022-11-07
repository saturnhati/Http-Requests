import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  constructor(private userService: UserService) {}

  userlist: User[] = [];

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe({
      next: (v) => (this.userlist = v),
      error: (err) => console.error(err),
    });
  }

  deleteUser(user: User) {
    console.log('cancello');
    let index = this.userlist.indexOf(user);
    this.userlist.splice(index, 1);
  }
}
