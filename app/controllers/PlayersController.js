import { AppState } from "../AppState.js";
import { gameNightPlayersService } from "../services/GameNightService.js";
import { setHTML, setText } from "../utils/Writer.js";


export class GameNightPlayersController {

    constructor() {
        console.log('game night players loaded');
        console.log('this is logging from the controller file', AppState.players)
        this.drawGameNightPlayers()
    }

    drawGameNightPlayers() {
        console.log('from controller DRAWING PLAYERS')
        const players = AppState.players
        console.log('hear are the players', players)

        let htmlString = ''

        players.forEach(player => {
            // console.log(player.GameNightPlayerCardHTMLTemplate)
            htmlString += player.GameNightPlayerCardHTMLTemplate
        })
        setHTML('players', htmlString)
    }

    increaseScore(playerName) {
        gameNightPlayersService.increaseScore(playerName)
        this.drawGameNightPlayers()
    }
    decreaseScore(playerName) {
        gameNightPlayersService.decreaseScore(playerName)
        this.drawGameNightPlayers()
    }

    addPlayer(event) {
        event.preventDefault()
        let form = event.target
        let playerName = form.playerName.value
        console.log('new player', playerName)
    }
}