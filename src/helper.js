class Draw {
    drawLine(ctx, color, start_x, start_y, end_x, end_y) {
        ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.moveTo(start_x, start_y);
        ctx.lineTo(end_x, end_y);
        ctx.stroke();
    }   

    drawImage(ctx, img, source_rect, dest_rect) {
        ctx.drawImage(img, source_rect[0], source_rect[1], source_rect[2], source_rect[3],
            dest_rect[0], dest_rect[1], dest_rect[2], dest_rect[3]);
    }

    drawRect(ctx, color, x, y, width, height) {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, width, height);
    }

    drawText(ctx, color, str, font, x, y) {
        ctx.font = font;
        ctx.fillStyle = color;
        ctx.fillText(str, x, y);
    }
}

module.exports = Draw;