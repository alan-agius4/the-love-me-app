import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user$: Observable<User>;

  constructor(private userService: UserService) {
    this.user$ = this.userService.user$;
  }

  ngOnInit(): void {
  }

}
