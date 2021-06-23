const GameView = require('./game_view');

window.addEventListener("DOMContentLoaded", e => {
    console.log("Welcome!")
    gameview = new GameView();
    gameview.draw();
})