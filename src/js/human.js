import { Actor, Input, Random, Vector, clamp } from "excalibur"
import { Resources } from "./resources"
import { ui } from "./ui"
export class human extends Actor {
    ui;

    constructor(ui){
        super({width:Resources.dud.width, height:Resources.dud.height})
        this.ui = ui;
    }
    onInitialize(engine){
        this.rand = new Random()

        this.graphics.use(Resources.dud.toSprite())
        this.pos = new Vector(this.rand.integer(0, 500), this.rand.integer(0,500)) 
        
        this.pointer.useGraphicsBounds = true
    }
    /*
    onPreUpdate(engine){
         // blijf binnen beeld
         this.pos.x = clamp(this.pos.x, this.width/2, engine.drawWidth - this.width/2);
         this.pos.y = clamp(this.pos.y, this.height/2, engine.drawHeight - this.height/2);
    }
    */
    hitBySaibamen(event){
        console.log("Fuck")
        this.kill();
        this.ui.updateScore(10)
    }
}