const Helper = require('./helper')

class ImageWrapper {
    constructor(name, rect) {

        this.helper = new Helper();
        this.img = this.loadGraphics(name);    
        this.rect = rect;
    }

    loadGraphics(name) {
        let image = {
            img: new Image(),
            ready: false
        }
        image.img.src = `images/${name}.png`
        // document.addEventListener("DOMContentLoaded", () => {
        //     image.ready = true;
        // })
        image.img.onload = function() {
            image.ready = true;
        }
        return image
    }

    draw(ctx, dest_rect) {
        if(this.img.ready) {
            this.helper.drawImage(ctx, this.img.img, this.rect, dest_rect);
        }
    }

}

module.exports = ImageWrapper;