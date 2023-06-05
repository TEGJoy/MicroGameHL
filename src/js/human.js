import { Actor, Input, Random, Vector, clamp } from "excalibur"
import { Resources } from "./resources"
import { userInterface } from "./userinterface"
import { Armor } from "./armor"
export class human extends Actor {
    userInterface;
    armor;

    constructor(userInterface){
        super({width:Resources.dud.width, height:Resources.dud.height})
        this.userInterface = userInterface;
        this.armor = new Armor()
    }
    onInitialize(engine){
        this.rand = new Random()
        this.graphics.use(Resources.dud.toSprite())
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
        this.userInterface.updateScore(10)
        console.log(this.armor)
    }
}