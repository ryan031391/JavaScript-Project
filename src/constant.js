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

// LEVEL DATA CONFIG
const MAP_GRID = 'mapgrid';
const GROUP1 = 'group1';
const GROUP2 = 'group2';

// IMAGE NAME
const GRID_IMAGE = 'tile.png';
const DEVIL = 'devil';
const FOOTMAN = 'footman';
const MAGICIAN = 'magician';
const EVILWIZARD = 'evilwizard';
const FIREBALL = 'fireball';

var IMAGE_SRC_MAP = new Map([
    [GRID_IMAGE, 'images/tile.png'],
    [DEVIL, 'images/devil.png'],
    [FOOTMAN, 'images/footman.png'],
    [MAGICIAN, 'images/magician.png'],
    [EVILWIZARD, 'images/evilwizard.png'],
    [FIREBALL, 'images/fireball.png']
]);
