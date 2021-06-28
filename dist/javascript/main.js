function getMousePos(canvas, evt) {
    const rect = canvas.getBoundingClientRect();
    return {
        x:evt.clientX - rect.left,
        y:evt.clientY - rect.top
    };
}

function main() {
    game.startup(0, level_1)
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

let mousePos;
let mouseDown = false;

canvas.addEventListener('mousemove', function(evt) {
    mousePos = getMousePos(canvas, evt);
});

canvas.addEventListener('mousedown', function(evt) {
    mouseDown = true;
    mousePos = getMousePos(canvas, evt);
});

const game = new Game();

main();
