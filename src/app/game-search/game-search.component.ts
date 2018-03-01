import { Component, OnInit } from '@angular/core';
import Game from '../Game';
import { GameService } from '../game.service';
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';


import {
    debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
@Component({
  selector: 'app-game-search',
  templateUrl: './game-search.component.html',
  styleUrls: ['./game-search.component.css']
})
export class GameSearchComponent implements OnInit {
  private searchTerms = new Subject<string>();
  searchResults$: Observable<Game[]>;
  constructor(private gameService:  GameService) { }

  searchGame(query: string): void {
    console.log('asking for'+ query);
    this.searchTerms.next(query)
  }

  ngOnInit(): void {
    console.log('im waiting');
    this.searchResults$ = this.searchTerms.pipe(debounceTime(300),
        distinctUntilChanged(),
        switchMap((query: string) =>
        this.gameService.searchGame(query)));
  }

}
