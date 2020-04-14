import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { UserService } from '../../service/user.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userId: number;
  user$: Observable<User>;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private usersService: UserService
  ) {}

  ngOnInit() {
    this.userId = +this.activatedRoute.snapshot.params['id'];
    if (this.userId !== 0) {
      this.user$ = this.usersService.getUser(this.userId);
    }
  }

  save(user: User) {
    user.id >= 1
      ? this.usersService
          .updatetUser(user)
          .subscribe(() => this.router.navigate(['/users']))
      : this.usersService
          .addUser(user)
          .subscribe(() => this.router.navigate(['/users']));
  }
}
