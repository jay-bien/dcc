import { Circle } from './classes/Circle';
import { Point } from './classes/Point';
import './style.css'


interface CanvasInterface {
  element: HTMLCanvasElement,
  width: number,
  height: number,
  color: string | undefined
}


class App{
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  mousePos: {x:number, y:number} = {x:0, y:0};
  circle: Circle;
  point: Point;

  constructor(canvas_config: CanvasInterface){
    const { element, width, height, color } = canvas_config;
    this.canvas = element;
    this.canvas.width = width;
    this.canvas.height = height;
    color ? this.canvas.style.background = color : null;
    const ctx = this.canvas.getContext('2d')
    if(!ctx) throw new Error("Missing CTX");
    this.canvas.addEventListener('mousemove', this.onMouseMove.bind(this) )
    this.ctx = ctx;
    this.circle = new Circle(this.mousePos.x, this.mousePos.y);
    this.point = new Point(this.mousePos.x, this.mousePos.y )
  }


  private onMouseMove(e: MouseEvent):void{
    const rect = this.canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    this.mousePos = {x: mouseX, y:mouseY}
  }

  public start(): void{
    this.loop();
  }
  private update():void{
    this.circle.update({x: this.mousePos.x, y: this.mousePos.y});
    this.point.update({x: this.mousePos.x, y:this.mousePos.y});
  }
  private draw():void{
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.circle.draw(this.ctx);
    this.point.draw(this.ctx);
  }
  private loop(): void{
    this.update();
    this.draw();
    requestAnimationFrame( this.loop.bind(this) )
  }
}

document.addEventListener('DOMContentLoaded', ()=> {
  const canvasEl = document.getElementById("canvas") as HTMLCanvasElement;
  if(!canvasEl) return;
  const canvas_config: CanvasInterface = {
    element: canvasEl,
    height: window.innerHeight,
    width: window.innerWidth,
    color: "white"
  }
  const app = new App(canvas_config);
  app.start();

})

