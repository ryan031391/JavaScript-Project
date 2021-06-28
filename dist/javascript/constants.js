const GRID_X_LEN = 10;
const GRID_Y_LEN = 12;
const REC_SIZE = 50;
const MAP_WIDTH = GRID_X_LEN * REC_SIZE;
const MAP_HEIGHT = GRID_Y_LEN * REC_SIZE;

const LIGHTYELLOW = '#F7EED6';
const SKYBLUE = '#2791FB';
const NAVYBLUE = '#3C3C64';
const LIGHTGREEN = '#86FF0D'
const GOLD = '#FFD700';

const MAP_EMPTY = 0;
const MAP_STONE = 1;
const MAP_GRASS = 2;

const BG_EMPTY = 0;
const BG_ACTIVE = 1;
const BG_RANGE = 2;
const BG_SELECT = 3;
const BG_ATTACK = 4;

const MAP_GRID = 'mapgrid';
const GROUP1 = 'group1';
const GROUP2 = 'group2';

const GRID_IMAGE = 'tile.png';
const DEVIL = 'devil';
const FOOTMAN = 'footman';
const MAGICIAN = 'magician';
const EVILWIZARD = 'evilwizard';
const FIREBALL = 'fireball';

const IMAGE_SRC_MAP = new Map([
    [GRID_IMAGE, 'images/tile.png'],
    [DEVIL,      'images/devil.png'],
    [FOOTMAN,    'images/footman.png'],
    [MAGICIAN,   'images/magician.png'],
    [EVILWIZARD, 'images/evilwizard.png'],
    [FIREBALL,   'images/fireball.png']
]);

const IDLE = 'idle';
const SELECT = 'select';
const WALK = 'walk';
const ATTACK = 'attack';

const ATTR_HEALTH = 'health';
const ATTR_DISTANCE = 'distance';
const ATTR_DAMAGE = 'damage';
const ATTR_ATTACK = 'attack';
const ATTR_DEFENSE = 'defense';
const ATTR_SPEED = 'speed';
const ATTR_REMOTE = 'remote';
