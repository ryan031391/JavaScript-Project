function getMousePos(canvas, evt) {
    const rect = canvas.getBoundingClientRect();
    return {
        x:evt.clientX - rect.left,
        y:evt.clientY - rect.top
    };
}

function main() {
    if(!game.done) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.update(ctx, mousePos, mouseDown);
        mouseDown = false;
        requestAnimationFrame(main);
    }
};

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
canvas.width = MAP_WIDTH;
canvas.height = MAP_HEIGHT;
document.body.appendChild(canvas);

const w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

w.onload = w.onresize = function() {
    var canvas = document.getElementById('canvas');
    console.log(canvas)
    canvas.width = window.innerWidth * 0.8;
    canvas.height = window.innerHeight * 0.8;
}

let mousePos;
let mouseDown = false;

canvas.addEventListener('mousemove', function(evt) {
    mousePos = getMousePos(canvas, evt);
});

canvas.addEventListener('mousedown', function(evt) {
    mouseDown = true;
    mousePos = getMousePos(canvas, evt);
});

const game = new Control();

const state_dict = new Map();
state_dict.set(MAIN_MENU, new MainMenu());
state_dict.set(LEVEL_START, new LevelStartScreen());
state_dict.set(LEVEL_LOSE, new LevelLoseScreen(LEVEL_LOSE_INFO));
state_dict.set(LEVEL_WIN, new LevelWinScreen(LEVEL_WIN_INFO));
state_dict.set(LEVEL, new Game());
game.setupStates(state_dict, MAIN_MENU);

main();



// canvas.addEventListener('mousedown', function(evt) {
//     mouseDown = true;
//     mousePos = getMousePos(canvas, evt);
// });

// const game = new Control();

// const state_dict = new Map();
// state_dict.set(MAIN_MENU, new MainMenu());
// state_dict.set(LEVEL_START, new LevelStartScreen());
// state_dict.set(LEVEL_LOSE, new LevelLoseScreen(LEVEL_LOSE_INFO));
// state_dict.set(LEVEL_WIN, new LevelWinScreen(LEVEL_WIN_INFO));
// state_dict.set(LEVEL, new Game());
// game.setupStates(state_dict, MAIN_MENU);

// main();
