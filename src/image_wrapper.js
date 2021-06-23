class ImageWrapper {
    constructor(name, rect) {
        const GRID_IMAGE = 'tile.png';
        const DEVIL = 'devil';
        const FOOTMAN = 'footman';
        const MAGICIAN = 'magician';
        const EVILWIZARD = 'evilwizard';
        const FIREBALL = 'fireball';

        const IMAGE_SRC_MAP = new Map([
            [GRID_IMAGE, 'images/tile.png'],
            [DEVIL, 'images/devil.png'],
            [FOOTMAN, 'images/footman.png'],
            [MAGICIAN, 'images/magician.png'],
            [EVILWIZARD, 'images/evilwizard.png'],
            [FIREBALL, 'images/fireball.png']
        ]);

        const IMAGE_MAP = this.loadAllGraphics(IMAGE_SRC_MAP)

        this.img = IMAGE_MAP.get(name);
        
        this.rect = rect;
    }

    loadAllGraphics(img_src_map) {
        let IMAGE_MAP = new Map()
        for (let key of img_src_map.keys()) {
            let tmp = { 'img': new Image(), 'ready': true };
            IMAGE_MAP.set(key, tmp);
            // tmp.img.onload = function () {
            //     let tmp = IMAGE_MAP.get(key);
            //     tmp.ready = true;
            // };
            tmp.img.src = img_src_map.get(key);
        }
        return IMAGE_MAP
    }

    draw(ctx, dest_rect) {
        console.log(this.img)
        if (this.img.ready) {
            ctx.drawImage(this.img.img, this.rect, dest_rect);
        }
    }
}

module.exports = ImageWrapper;