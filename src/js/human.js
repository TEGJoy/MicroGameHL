import { Actor, Input, Random, Vector, clamp } from "excalibur"
import { Resources } from "./resources"
import { userInterface } from "./userinterface"
import { Armor } from "./armor"
import { ImmovableObject } from "./immovableObject";
export class human extends ImmovableObject {
    userInterface;
    armor;

    constructor(userInterface){
        super({width:Resources.yamcha.width, height:Resources.yamcha.height})
        this.userInterface = userInterface;
    }
    onInitialize(engine){
        this.graphics.use(Resources.yamcha.toSprite())
        this.pointer.useGraphicsBounds = true
        this.randomPlacer()
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
    dissapear(){
        this.kill();
    }
}