import Game from './Game';

export default class User {
    id: number;
    name: string;
    games: Array<Game>;
    wishList: Array<Game>;
}