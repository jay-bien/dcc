// Basic Distance Constraint

import { Circle } from "../classes/Circle";
import { Point } from "../classes/Point";

export function basicDistanceConstraint(anchor: Point, point: Point, distance: number):{x: number, y:number}{
    const maxDistance = distance;
    let dx = anchor.x - point.x;
    let dy = anchor.y - point.y;
    const length = Math.sqrt(dx*dx + dy*dy);
    if(length <= maxDistance) return {x: point.x, y: point.y}

    console.log("constrain distance")
    const scale = maxDistance / distance;
    console.log(scale)
    dx *= scale;
    dy *= scale;
    const x2 = point.x + dx;
    const y2 = point.y + dy;
  
    return {x: x2, y: y2}
}

