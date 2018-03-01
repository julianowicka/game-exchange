import { Component, OnInit, EventEmitter, } from '@angular/core';
import {UserService} from './user.service';
import {ActivatedRoute} from '@angular/router';
import User from './User';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public logged: boolean = false;
    public id: string;
    public name: string;


    constructor() {
        this.reload();
    }

    ngOnInit() {
        this.reload();
    }

    reload(): void {
        this.logged = JSON.parse(sessionStorage.getItem('isLogged'));
        if (!(sessionStorage.getItem('User'))) {
            sessionStorage.setItem('isLogged', 'false');
        } else {
            const x = this.me()
            this.id = x['id'];
            this.name = x['name'];
            console.log(this);
        }
    }

    me(): string {
        const logged = JSON.parse(sessionStorage.getItem('User'));
        return logged;
    }
}
