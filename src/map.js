const Draw = require('./helper')
const ImageWrapper = require('./image_wrapper')

class MapData {
    constructor(width, height, grid) {
        this.width = width;
        this.height = height;
        this.active_entity = undefined;
        
        this.setupMap(grid);
        this.draw = new Draw();
        
    }

    setupMap(grid) {
        let initTwoDimensionalArray = function(one_dim_num, two_dim_num, init_value) {
            let arr = [];
            for (let i = 0; i < one_dim_num; i++) {
                let temp = [];
                for (let j = 0; j < two_dim_num; j++) {
                    temp.push(init_value);
                }
                arr.push(temp);
            }
            return arr;
        }

        this.grid_map = initTwoDimensionalArray(this.height, this.width, 0);

        // console.log(this.height, this.width)

        for (let i = 0; i < grid.length; i++) {
            let { x, y, type } = grid[i];
            this.grid_map[y][x] = type;
        };

        this.bg_map = initTwoDimensionalArray(this.height, this.width, 0);
        this.entity_map = initTwoDimensionalArray(this.height, this.width, undefined);
    }

    inBound(pos) {
        if (pos[0] < 0 || pos[0] >= this.width ||
            pos[1] < 0 || pos[1] >= this.height) {
            return false;
        }
        return true;
    }

    isMovable(pos) {
        return (this.grid_map[pos[0]][pos[1]] !== MAP_STONE &&
            this.entity_map[pos[0]][pos[1]] === undefined);
    }

    drawBackground(ctx) {
        
        const GRID_X_LEN = 30;
        const GRID_Y_LEN = 30;
        const REC_SIZE = 50;
        const MAP_WIDTH = GRID_X_LEN * REC_SIZE;
        const MAP_HEIGHT = GRID_Y_LEN * REC_SIZE;

        // COLOR LIST
        const LIGHTYELLOW = '#F7EED6';
        const SKYBLUE = '#2791FB';
        const NAVYBLUE = '#3C3C64';
        const LIGHTGREEN = '#86FF0D'
        const GOLD = '#FFD700';

        // MAP GRID TYPE
        const MAP_EMPTY = 0;
        const MAP_STONE = 1;
        const MAP_GRASS = 2;

        // MAP BACKGROUND STATE
        const BG_EMPTY = 0;
        const BG_ACTIVE = 1;
        const BG_RANGE = 2;
        const BG_SELECT = 3;
        const BG_ATTACK = 4;

        const GRID_IMAGE = 'tile.png';

        function getMapGridImage() {
            let grid_rect = new Map([
                [MAP_STONE.toString(), [0, 21, 20, 20]],
                [MAP_GRASS.toString(), [0, 0, 20, 20]]
            ]);
            let grid_image_map = new Map();

            for (let key of grid_rect.keys()) {              
                let img = new ImageWrapper('tile.png', grid_rect.get(key));
                grid_image_map.set(key, img);
            }
            return grid_image_map;
        }

        const GRID_IMAGE_MAP = getMapGridImage();

        for (let y in this.bg_map) {
            let row = this.bg_map[y];
            for (let x in row) {
                let color = LIGHTYELLOW;
                if (row[x] == BG_ACTIVE) {
                    color = SKYBLUE;
                }
                else if (row[x] == BG_RANGE) {
                    color = NAVYBLUE;
                }
                else if (row[x] == BG_SELECT) {
                    color = LIGHTGREEN;
                }
                else if (row[x] == BG_ATTACK) {
                    color = GOLD;
                }

                this.draw.drawRect(ctx, color, x * REC_SIZE, y * REC_SIZE, REC_SIZE, REC_SIZE);
            }
        }

        for (let y in this.grid_map) {
            let row = this.grid_map[y];
            for (let x in row) {
                if (row[x] == MAP_STONE) {
                    let dest_rect = [x * REC_SIZE, y * REC_SIZE, 48, 48];
                    let grid_image = GRID_IMAGE_MAP.get(MAP_STONE.toString());
                    grid_image.draw(ctx, dest_rect);
                }
                else if (row[x] == MAP_GRASS) {
                    let dest_rect = [x * REC_SIZE, y * REC_SIZE, 48, 48];
                    let grid_image = GRID_IMAGE_MAP.get(MAP_GRASS.toString());
                    grid_image.draw(ctx, dest_rect);
                }
            }
        }

        for (let y = 0; y <= this.height; y++) {
            let start_x = 0, start_y = REC_SIZE * y;
            let end_x = MAP_WIDTH, end_y = REC_SIZE * y;
            this.draw.drawLine(ctx, 'black', start_x, start_y, end_x, end_y);
        }

        for (let x = 0; x <= this.width; x++) {
            let start_x = REC_SIZE * x, start_y = 0;
            let end_x = REC_SIZE * x, end_y = MAP_HEIGHT;
            this.draw.drawLine(ctx, 'black', start_x, start_y, end_x, end_y);
        }
    }
}


module.exports = MapData;