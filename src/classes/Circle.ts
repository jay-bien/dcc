export class Circle {
    x: number;
    y: number;
    radius: number;
    color: string;

    constructor(x: number, y: number, color: string = "purple", radius: number = 100) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }

    update(options:{x: number, y: number}) {
        this.x = options.x;
        this.y = options.y; 
    }

    draw(ctx: CanvasRenderingContext2D) {
        console.log("draw, " + this.x + ":" + this.y);

        ctx.fillStyle = "purple";
        ctx.arc(this.x, this.y, 100, 0, 2*Math.PI);
        ctx.stroke();
        ctx.strokeStyle = this.color;
        ctx.fillStyle = "pink";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.closePath();
    }
}