import { Component, OnInit } from '@angular/core';
import { GameService} from '../game.service';
import Game from '../Game'


@Component({
  selector: 'app-add-new-game',
  templateUrl: './add-new-game.component.html',
  styleUrls: ['./add-new-game.component.css']
})
export class AddNewGameComponent implements OnInit {

  constructor(private gameService: GameService) { }

  addGame(name: string, description: string): void {
    name = name.trim();
    description = description.trim();
    console.log(name+" "+ description);
    this.gameService.addGame(({ name, description}) as Game);
  }

  ngOnInit() {
  }

}
