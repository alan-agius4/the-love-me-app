import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user$: Observable<User>;

  constructor(private userService: UserService) {
    this.user$ = this.userService.user$;
  }

  ngOnInit(): void {
  }

}
