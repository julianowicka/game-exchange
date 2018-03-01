import { Component, OnInit, Input } from '@angular/core';
import Game from '../Game';
import { Location } from '@angular/common';
import { GameService } from '../game.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule} from '@angular/forms';


@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {

  game: Game;

  constructor(private gameService: GameService,  private location: Location, private route: ActivatedRoute) { }

  getGameById(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.gameService.getGameById(id).
        subscribe(game => {
          this.game = game;
        console.log(this.game instanceof Game);
        });
  }

  ngOnInit() {
    this.getGameById();
  }

    goBack(): void {
        this.location.back();
    }

    updateGame() {
      return this.gameService.updateGame(this.game)
          .subscribe(() => this.goBack());
    }

    deleteGame(game: Game) {
    return this.gameService.deleteGame(this.game, this.game.id)
        .subscribe(() => this.goBack());
    }

    whoIsLogged(): void {

    }
}

