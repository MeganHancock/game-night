import { AppState } from "../AppState.js";

export class GameNightPlayersController {

    constructor() {
        console.log('game night players loaded');
        console.log('this is logging from the controller file', AppState.players)
    }

    drawGameNightPlayers() {
        console.log('from controller DRAWING PLAYERS')
    }
}