import { Actor, Input, Random, Vector, clamp } from "excalibur"
import { Resources } from "./resources"
import { userInterface } from "./userinterface"
import { Armor } from "./armor"
import { ImmovableObject } from "./immovableObject";
export class senzu extends Actor {
    userInterface;
    armor;

    constructor(scene){
        super({width:Resources.bean.width, height:Resources.bean.height})
        this.scene = scene;
    }
    onInitialize(engine){
        this.rand = new Random()
        this.graphics.use(Resources.bean.toSprite())
        this.pos = new Vector(this.rand.integer(0, 1000), this.rand.integer(0,600)) 
        
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
        this.scene.remainingTime+=10
    }
    dissapear(){
        this.kill();
    }
}