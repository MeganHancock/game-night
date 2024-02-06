export class GameNightPlayer {

    constructor(playerName, playerScore) {
        this.name = playerName;
        this.score = playerScore;
    }

    get GameNightPlayerCardHTMLTemplate() {
        return `
    <div class="col-6">
    <div class="">
    <div class="p-2">
        <h2>'${this.name}'</h2>
        <h3>Player Score: '${this.score}'</h3>
        <div>
        <button type="button">Score Increase</button>
        <button type="button">Score Decrease</button>
        </div>
    </div>
    </div>
</div>`
    }
}