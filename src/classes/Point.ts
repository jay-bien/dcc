export class Point {
    x: number;
    y: number;
    size: number = 30;
    color: string = 'purple';

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    update(options:{x: number, y: number}) {
        this.x = options.x;
        this.y = options.y;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
}