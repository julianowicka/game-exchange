import { Component, OnInit } from '@angular/core';
import Game from '../Game';
import {GAMES} from '../mock-game-list';
import { GameService } from '../game.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {


  constructor(private gameService: GameService) { }


    games: Game[];
    selectedGame: Game;

    ngOnInit() {
        this.getGames();
    }

  onGameSelect(game: Game): void {
    this.selectedGame = game;
    console.log(this.selectedGame);
  }

  getGames(): void {
    console.log('games');
    this.gameService.getGames()
        .subscribe(games => this.games = games);
  }

    addGame(name: string, description: string): void {
        name = name.trim();
        description = description.trim();
        console.log(name+" "+ description);
        this.gameService.addGame(({ name, description}) as Game)
            .subscribe(() => this.getGames());
    }


}
