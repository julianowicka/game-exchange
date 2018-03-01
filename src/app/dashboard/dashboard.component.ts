import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import  Game  from '../Game';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private gameService: GameService) { }
  games : Game[];
  getLatestGames(): void {
    this.gameService.getGames()
        .subscribe(games => this.games = games.slice(1,4));
  }

  ngOnInit() {
    this.getLatestGames();
  }

}
