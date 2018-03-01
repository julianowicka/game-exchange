import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {ActivatedRoute} from '@angular/router';
import User from '../User';


@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  constructor(private userService: UserService, private route: ActivatedRoute) { }
    selectedUser: User;
    users: User[];
    login(): void {
        this.userService.getUserById(1)
            .subscribe(user => this.selectedUser = user);
        console.log(this.selectedUser);
    }
  ngOnInit() {
      this.login();
  }

  getOtherUsers(): void {
      this.userService.getUsers()
          .subscribe(users => this.users = users);
  }

}
