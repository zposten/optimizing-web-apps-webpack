import './klondike/scoring'
import './klondike/game'
import './klondike/klondike'
import './klondike/board'

let p = Promise.resolve()
angular.module("solitaire", ["klondike", "ngDraggable"]);
