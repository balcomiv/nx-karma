import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users$: Observable<User[]>;

  constructor(private usersService: UserService) {}

  ngOnInit() {
    this.users$ = this.usersService.getUsers();
  }
}
