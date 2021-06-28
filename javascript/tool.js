class ImageWrapper{
    constructor(name, rect) {
        this.img = IMAGE_MAP.get(name);
        this.rect = rect;
    }
    
    draw(ctx, dest_rect) {
        // console.log(this.img)
        if(this.img.ready) {
            drawImage(ctx, this.img.img, this.rect, dest_rect);
        }
    }
}

function drawLine(ctx, color, start_x, start_y, end_x, end_y) {
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(start_x, start_y);
    ctx.lineTo(end_x, end_y);
    ctx.stroke();
}

function drawImage(ctx, img, source_rect, dest_rect) {
    console.log(ctx, img, source_rect, dest_rect)
    ctx.drawImage(img, source_rect[0], source_rect[1], source_rect[2], source_rect[3],
                  dest_rect[0], dest_rect[1], dest_rect[2], dest_rect[3]);
}

function drawRect(ctx, color, x, y, width, height) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}

function drawText(ctx, color, str, font, x, y) {
    ctx.font = font;
    ctx.fillStyle = color;
    ctx.fillText(str, x, y);
}

function getAttackPositions(x, y) {
    return [[-1,-1], [-1,0], [-1,1], [0,-1], [0,1], [1,-1],[1,0], [1,1]];
}

function isNextToEntity(entity1, entity2) {
    if(Math.abs(entity1.map_x - entity2.map_x) <= 1 &&
       Math.abs(entity1.map_y - entity2.map_y) <= 1) {
        return true;
    }
    return false;
}

function loadAllGraphics(img_src_map) {
    for(let key of img_src_map.keys()) {
        let tmp = {'img':new Image(), 'ready':false};
        IMAGE_MAP.set(key, tmp);
        tmp.img.onload = function() {
            let tmp = IMAGE_MAP.get(key);
            tmp.ready = true;
        };
        tmp.img.src = img_src_map.get(key);
    }
}

function getMapGridImage() {
    let grid_rect = new Map([
        [MAP_STONE.toString(), [0, 21, 20, 20]],
        [MAP_GRASS.toString(), [0, 0, 20, 20]]
    ]);
    let grid_image_map = new Map();

    for(let key of grid_rect.keys()) {
        let img = new ImageWrapper(GRID_IMAGE, grid_rect.get(key));
        grid_image_map.set(key, img);
    }
    return grid_image_map;
}


const IMAGE_MAP = new Map();
loadAllGraphics(IMAGE_SRC_MAP);

const GRID_IMAGE_MAP = getMapGridImage();
