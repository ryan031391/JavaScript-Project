/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MapData = __webpack_require__(/*! ./map */ \"./src/map.js\")\n\nclass GameView {\n    constructor(){\n        const GRID = [{ x: 3, y: 5, type: 1 }, { x: 5, y: 5, type: 1 },\n                    { x: 4, y: 4, type: 2 }, { x: 4, y: 6, type: 2 }]\n        const GRID_X_LEN = 10;\n        const GRID_Y_LEN = 12;\n        const REC_SIZE = 50;\n\n        this.canvas = document.getElementById('game-canvas');\n        this.ctx = this.canvas.getContext('2d');\n        this.canvas.width = GRID_X_LEN * REC_SIZE;\n        this.canvas.height = GRID_Y_LEN * REC_SIZE;\n\n        this.map = new MapData(GRID_X_LEN, GRID_Y_LEN, GRID);\n    }\n\n    draw(){\n        this.map.drawBackground(this.ctx);\n    }\n}\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/***/ ((module) => {

eval("class Draw {\n    drawLine(ctx, color, start_x, start_y, end_x, end_y) {\n        ctx.strokeStyle = color;\n        ctx.beginPath();\n        ctx.moveTo(start_x, start_y);\n        ctx.lineTo(end_x, end_y);\n        ctx.stroke();\n    }   \n\n    drawImage(ctx, img, source_rect, dest_rect) {\n        console.log(ctx, img, source_rect, dest_rect)\n        ctx.drawImage(img, source_rect[0], source_rect[1], source_rect[2], source_rect[3],\n            dest_rect[0], dest_rect[1], dest_rect[2], dest_rect[3]);\n    }\n\n    drawRect(ctx, color, x, y, width, height) {\n        ctx.fillStyle = color;\n        ctx.fillRect(x, y, width, height);\n    }\n\n    drawText(ctx, color, str, font, x, y) {\n        ctx.font = font;\n        ctx.fillStyle = color;\n        ctx.fillText(str, x, y);\n    }\n}\n\nmodule.exports = Draw;\n\n//# sourceURL=webpack:///./src/helper.js?");

/***/ }),

/***/ "./src/image_wrapper.js":
/*!******************************!*\
  !*** ./src/image_wrapper.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Helper = __webpack_require__(/*! ./helper */ \"./src/helper.js\")\n\nclass ImageWrapper {\n    constructor(name, rect) {\n\n        this.helper = new Helper();\n        this.img = this.loadGraphics(name);    \n        this.rect = rect;\n    }\n\n    loadGraphics(name) {\n        let image = {\n            img: new Image(),\n            ready: false\n        }\n        image.img.src = `images/${name}.png`\n        // document.addEventListener(\"DOMContentLoaded\", () => {\n        //     image.ready = true;\n        // })\n        image.img.onload = function() {\n            image.ready = true;\n        }\n        return image\n    }\n\n    draw(ctx, dest_rect) {\n        if(this.img.ready) {\n            this.helper.drawImage(ctx, this.img.img, this.rect, dest_rect);\n        }\n    }\n\n}\n\nmodule.exports = ImageWrapper;\n\n//# sourceURL=webpack:///./src/image_wrapper.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const GameView = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n\nwindow.addEventListener(\"DOMContentLoaded\", e => {\n    console.log(\"Welcome!\")\n    gameview = new GameView();\n    gameview.draw();\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/map.js":
/*!********************!*\
  !*** ./src/map.js ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Draw = __webpack_require__(/*! ./helper */ \"./src/helper.js\")\nconst ImageWrapper = __webpack_require__(/*! ./image_wrapper */ \"./src/image_wrapper.js\")\nconst Object = __webpack_require__(/*! ./object */ \"./src/object.js\")\n\nclass MapData {\n    constructor(width, height, grid) {\n        this.width = width;\n        this.height = height;\n        \n        this.setupMap(grid);\n        this.draw = new Draw();\n        \n    }\n\n    setupMap(grid) {\n        let initTwoDimensionalArray = function(one_dim_num, two_dim_num, init_value) {\n            let arr = [];\n            for (let i = 0; i < one_dim_num; i++) {\n                let temp = [];\n                for (let j = 0; j < two_dim_num; j++) {\n                    temp.push(init_value);\n                }\n                arr.push(temp);\n            }\n            return arr;\n        }\n\n        this.grid_map = initTwoDimensionalArray(this.height, this.width, 0);\n\n        for (let i = 0; i < grid.length; i++) {\n            let { x, y, type } = grid[i];\n            this.grid_map[y][x] = type;\n        };\n\n        this.bg_map = initTwoDimensionalArray(this.height, this.width, 0);\n        this.entity_map = initTwoDimensionalArray(this.height, this.width, undefined);\n    }\n\n    inBound(pos) {\n        if (pos[0] < 0 || pos[0] >= this.width ||\n            pos[1] < 0 || pos[1] >= this.height) {\n            return false;\n        }\n        return true;\n    }\n\n    isMovable(pos) {\n        return (this.grid_map[pos[0]][pos[1]] !== MAP_STONE &&\n            this.entity_map[pos[0]][pos[1]] === undefined);\n    }\n\n    drawBackground(ctx) {\n\n        let rec_size = 50;\n        let map_width = this.width * rec_size;\n        let map_height = this.height * rec_size;\n\n        // COLOR LIST\n        const LIGHTYELLOW = '#F7EED6';\n        const SKYBLUE = '#2791FB';\n        const NAVYBLUE = '#3C3C64';\n        const LIGHTGREEN = '#86FF0D'\n        const GOLD = '#FFD700';\n\n        // MAP GRID TYPE\n        const MAP_EMPTY = 0;\n        const MAP_STONE = 1;\n        const MAP_GRASS = 2;\n\n        // MAP BACKGROUND STATE\n        const BG_EMPTY = 0;\n        const BG_ACTIVE = 1;\n        const BG_RANGE = 2;\n        const BG_SELECT = 3;\n        const BG_ATTACK = 4;\n\n        // function getMapGridImage() {\n        //     let grid_rect = new Map([\n        //         [MAP_STONE.toString(), [0, 21, 20, 20]],\n        //         [MAP_GRASS.toString(), [0, 0, 20, 20]]\n        //     ]);\n        //     let grid_image_map = new Map();\n\n        //     for (let key of grid_rect.keys()) {              \n        //         let img = new ImageWrapper('tile', grid_rect.get(key));\n        //         grid_image_map.set(key, img);\n        //     }\n        //     return grid_image_map;\n        // }\n\n        // let grid_image_map = getMapGridImage();\n\n\n        for (let y in this.bg_map) {\n            let row = this.bg_map[y];\n            for (let x in row) {\n                let color = LIGHTYELLOW;\n                if (row[x] === BG_ACTIVE) {\n                    color = SKYBLUE;\n                }\n                else if (row[x] === BG_RANGE) {\n                    color = NAVYBLUE;\n                }\n                else if (row[x] === BG_SELECT) {\n                    color = LIGHTGREEN;\n                }\n                else if (row[x] === BG_ATTACK) {\n                    color = GOLD;\n                }\n\n                this.draw.drawRect(ctx, color, x * rec_size, y * rec_size, rec_size, rec_size);\n            }\n        }\n\n        this.grid_map.forEach((row, y) => {\n            row.forEach((grid, x) => {\n                if (grid === 1) {\n                    let grid_img = new Object({pos: [x,y], color: 'grey'})\n                    grid_img.draw(ctx)\n                } else if (grid === 2) {\n                    let grid_img = new Object({pos: [x,y], color: 'green'})\n                    grid_img.draw(ctx)\n                }\n            })\n        })\n\n        \n\n        // for (let y in this.grid_map) {\n        //     let row = this.grid_map[y];\n        //     for (let x in row) {\n                \n        //         if (row[x] === MAP_STONE) {\n        //             let dest_rect = [x * rec_size, y * rec_size, 48, 48];\n        //             let grid_image = grid_image_map.get(MAP_STONE.toString());\n                    \n        //             grid_image.draw(ctx, dest_rect);\n        //         }\n        //         else if (row[x] === MAP_GRASS) {\n        //             let dest_rect = [x * rec_size, y * rec_size, 48, 48];\n        //             let grid_image = grid_image_map.get(MAP_GRASS.toString());\n        //             grid_image.draw(ctx, dest_rect);\n        //         }\n        //     }\n        // }\n\n        for (let y = 0; y <= this.height; y++) {\n            let start_x = 0, start_y = rec_size * y;\n            let end_x = map_width, end_y = rec_size * y;\n            this.draw.drawLine(ctx, 'black', start_x, start_y, end_x, end_y);\n        }\n\n        for (let x = 0; x <= this.width; x++) {\n            let start_x = rec_size * x, start_y = 0;\n            let end_x = rec_size * x, end_y = map_height;\n            this.draw.drawLine(ctx, 'black', start_x, start_y, end_x, end_y);\n        }\n    }\n}\n\n\nmodule.exports = MapData;\n\n//# sourceURL=webpack:///./src/map.js?");

/***/ }),

/***/ "./src/object.js":
/*!***********************!*\
  !*** ./src/object.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const ImageWrapper = __webpack_require__(/*! ./image_wrapper */ \"./src/image_wrapper.js\")\n\nclass Object {\n    constructor(options){\n        this.pos = options.pos;\n        this.data = options.data;\n        this.color = options.color;\n        // this.image = this.draw(options.name);\n        this.game = options.game;\n        this.map = options.map;\n        const DIRS = [[1, 0], [0, 1], [-1, 0], [0, -1]]\n    }\n\n    draw(ctx) {\n        console.log(ctx)\n        ctx.beginPath();\n        let x = this.pos[0] * 50 + 24\n        let y = this.pos[1] * 50 + 24\n        ctx.arc(x, y, 20, 0, 2 * Math.PI);\n        ctx.strokeStyle = this.color;\n        ctx.stroke();\n        ctx.fillStyle = this.color;\n        ctx.fill();\n    };  \n\n    // draw(name) {\n    //     let rect = [0, 0, 14, 14];\n    //     let img = `images/${name}.png`\n    //     this.image = new ImageWrapper(img, rect)\n    // }\n\n    move(pos) {\n        this.pos[0] += pos[0];\n        this.pos[1] += pos[1];\n    }\n\n    possibleMoves() {\n        let possibleMoves = []\n        let distance = function (start, end) {\n            return Math.abs(start[0] - end[0]) + Math.abs(start[1] - end[1])\n        }\n        let demoMove = function (start, dir) {\n            return [(start[0] + dir[0]), (start[1] + dir[1])]\n        }\n        let validMove = function (pos) {\n            if (this.map.inBound(pos) && this.map.isMovable(pos)) {\n                return true\n            } else {\n                return false\n            }\n        }\n        let steps = [];\n        steps.push(this.pos);\n        while (steps.length > 0) {\n            steps.forEach(step => {\n                this.DIRS.forEach(dir => {\n                    demo = demoMove(step, dir)\n                    if (\n                        distance(this.pos, demo) <= this.data.speed &&\n                        validMove(demo)\n                    ) {\n                        steps.push(demo)\n                    }\n                })\n            })\n            possibleMoves.push(steps.shift())\n        }\n        return possibleMoves;\n    }\n}\n\nmodule.exports = Object;\n\n//# sourceURL=webpack:///./src/object.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;