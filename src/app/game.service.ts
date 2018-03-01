import { Injectable } from '@angular/core';
import Game from './Game';
import { GAMES } from './mock-game-list';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class GameService {
    private gamesUrl = 'api/games';
    games: Game[];


    getGames(): Observable <Game[]> {
        return this.http.get<Game[]>(this.gamesUrl);
    }

    getGameById(id: number): Observable <Game> {
        //return of(GAMES.find(game => game.id === id));
        const url = `${this.gamesUrl}/${id}`;
        return this.http.get<Game>(url);
    }

    updateGame(game: Game): Observable <any> {
        return this.http.put(this.gamesUrl, game, httpOptions)
    }

    addGame(game: Game): Observable <any> {
        console.log('im being invoked');
        return this.http.post(this.gamesUrl, game, httpOptions);
    }

    deleteGame(game: Game, id: number): Observable <Game> {
        const url =`${this.gamesUrl}/${id}`;
        return this.http.delete<Game>(url, httpOptions)
    }

    searchGame(query: string): Observable <Game[]> {
        console.log('searching'+ query);
        if(!query.trim()) {
            return of([])
        }
        return this.http.get<Game[]>(`api/games/?name=${query}`);
    }

    constructor(private http: HttpClient) { }

}
