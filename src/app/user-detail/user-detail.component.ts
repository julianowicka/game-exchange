import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import {FormsModule} from '@angular/forms';
import User from '../User';
import Game from '../Game';



@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
     // user:  User;//User[];
     // loggedUser: User;
    // @Input () yourTrade: Game;
    // @Input () hisTrade: Game;
    // yourTrade: Game[];
    // hisTrade: Game[];
  //   public logged:  false;
  // public isTradeAvaiable: boolean = false;
  // public id: string;
  // public name: string
  // searchText: string;
    public user: User;


  constructor(private userService: UserService, private route: ActivatedRoute) {
      //this.reload();
      //this.whoIsLogged();
      // this.whatYouCanTradeFor();
  }


    ngOnInit() {
        this.getUserById();
        this.sayHi();
        // this.reload();
        // this.whoIsLogged();
        // this.whatYouCanTradeFor();

    }

  getUserById(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      // if (id.toString() === this.id) {
      //     console.log('duh');
      //     this.isTradeAvaiable = (id.toString() === this.id);
      //     console.log(this.isTradeAvaiable);
      // } else {
      //     this.isTradeAvaiable = (id.toString() === this.id);
      //     console.log(this.isTradeAvaiable);
      //     console.log('not duh');
      // }

      this.userService.getUserById(1)
          .subscribe(response => this.user = response);
      console.log(this.user);
      console.log('test');
  }
  sayHi(): void {
      console.log(this.user);
  }

    reload(): void {
        this.logged = JSON.parse(sessionStorage.getItem('isLogged'));
        if (!(sessionStorage.getItem('User'))) {
            sessionStorage.setItem('isLogged', 'false');
        } else {
            const x = this.me()
            this.id = x['id'];
            this.name = x['name'];
        }
    }

    whoIsLogged(): void {
      console.log('i fetch user!');
      const idNumber = +this.id;
        this.userService.getUserById(idNumber)
            .subscribe(user => this.loggedUser = user);
        console.log(" hmm: "+ idNumber);
    }

    whatYouCanTradeFor(): void {
        const loggedUserGames = this.loggedUser.games;
        const loggedUserWhishes = this.loggedUser.wishList;
        const targetUserGames = this.user.games;
        const targetUserWishes = this.user.wishList;
        console.log("fuck this shit im out");
        loggedUserWhishes.map(yourGame => {
            targetUserGames.map( hisGame => {
                if (hisGame.id == yourGame.id) {
                    consle.log(hisGame)
            });
        });
        loggedUserGames.map(yourGame => {
            targetUserWishes.map( hisGame => {
                if (hisGame.id == yourGame.id) {
                }
            });
            console.log("qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq");
            console.log(this.yourTrade);
        });
    }


    me(): string {
        const logged = JSON.parse(sessionStorage.getItem('User'));
        return logged;
    }
}
