const ImageWrapper = require('./image_wrapper')

class MovingObject {
    constructor(options){
        this.pos = options.pos;
        this.data = options.data;
        this.color = options.color;
        this.image = this.draw(options.name);
        this.game = options.game;
        this.map = options.map;
        const DIRS = [[1, 0], [0, 1], [-1, 0], [0, -1]]
    }



    draw(name) {
        let rect = [0, 0, 14, 14];
        let img = `images/${name}.png`
        this.image = new ImageWrapper(img, rect)
    }

    move(pos) {
        this.pos[0] += pos[0];
        this.pos[1] += pos[1];
    }

    possibleMoves() {
        let possibleMoves = []
        let distance = function (start, end) {
            return Math.abs(start[0] - end[0]) + Math.abs(start[1] - end[1])
        }
        let demoMove = function (start, dir) {
            return [(start[0] + dir[0]), (start[1] + dir[1])]
        }
        let validMove = function (pos) {
            if (this.map.inBound(pos) && this.map.isMovable(pos)) {
                return true
            } else {
                return false
            }
        }
        let steps = [];
        steps.push(this.pos);
        while (steps.length > 0) {
            steps.forEach(step => {
                this.DIRS.forEach(dir => {
                    demo = demoMove(step, dir)
                    if (
                        distance(this.pos, demo) <= this.data.speed &&
                        validMove(demo)
                    ) {
                        steps.push(demo)
                    }
                })
            })
            possibleMoves.push(steps.shift())
        }
        return possibleMoves;
    }
}

module.exports = MovingObject;