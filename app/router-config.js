import { ExamplesController } from "./controllers/ExamplesController.js";
import { HomeController } from "./controllers/HomeController.js";
import { Router } from "./utils/Router.js";
// import { GameNightPlayer } from "./models/GameNightModel.js";
import { GameNightPlayersController } from "./controllers/PlayersController.js";


export const router = new Router([
  {
    path: '',
    controllers: [HomeController, ExamplesController, GameNightPlayersController],
    view: /*html*/`
    <div class="bg-white p-3">
      <div class="card-body">
        <p>Home Page</p>
        <button class="btn btn-dark" onclick="app.HomeController.testButton()">😎</button>
      </div>
    </div>
    `
  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  }
])