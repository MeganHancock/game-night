import { AppState } from "../AppState.js";

class GameNightPlayersService {

    increaseScore(playerName) {
        console.log('increasing score in the service file')
        const players = AppState.players
        console.log('players', players);

        const foundPlayer = players.find(player => player.name == playerName)
        foundPlayer.score++
    }

    decreaseScore(playerName) {
        const players = AppState.players
        const foundPlayer = players.find(player => player.name == playerName)
        foundPlayer.score--
    }
}

export const gameNightPlayersService = new GameNightPlayersService()