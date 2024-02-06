import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { GameNightPlayer } from './models/GameNightModel.js'

class ObservableAppState extends EventEmitter {

  examples = []

  players = [
    new GameNightPlayer('megan', 0),
    new GameNightPlayer('mack', 0),
  ];
}



export const AppState = createObservableProxy(new ObservableAppState())
