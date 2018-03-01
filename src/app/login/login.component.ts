import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { window } from 'rxjs/operator/window';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

    public user: Array<any>
    public id: number;

    constructor(private userService: UserService, private router: Router ) { }

    ngOnInit() {
    }

    onSubmit(value: any): void {
        let username = value.username;
        console.log(username);
        this.searchUser(username);
    }

    saveUser(user: {id: string, name: string}): void {
        sessionStorage.setItem('User', JSON.stringify(user));
        sessionStorage.setItem('isLogged', 'true');
        this.goToDetails();
    }

    searchUser(username: string): void {
        let logged = false;
        this.userService.getUsers().subscribe((users: [any]) => {
            for (let user of users) {
                if (user['name'] === username) {
                    this.id = user['id'];
                    logged = true;
                    this.saveUser(user);
                    break;
                }
            }
            if (logged === false) {
                alert('user not found');
            }
        });
    }

    goToDetails(): void {
        location.replace('../');
    }

}
