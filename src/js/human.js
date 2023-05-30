import { Actor, Input, Random, Vector, clamp } from "excalibur"
import { Resources } from "./resources"
export class human extends Actor {
    constructor(){
        super({width:100, height:100})
    }
    onInitialize(engine){
        this.rand = new Random()

        this.graphics.use(Resources.dud.toSprite())
        this.pos = new Vector(this.rand.integer(100, 500), this.rand.integer(100,500)) 

        this.enableCapturePointer = true
        this.pointer.useGraphicsBounds = true
    }
    hitBySaibamen(event){
        console.log("Fuck")
        this.kill();
    }
}