import { Actor, Random, Vector } from "excalibur"
import { Resources } from "./resources"
export class background extends Actor {
    constructor(){
        super({width: 800,
            height: 600})
    }

    onInitialize(engine){
        
    }
    placeBG(scene){
        switch(scene){
            case "game1":
                this.graphics.use(Resources.bns.toSprite())
                this.scale = new Vector(1.5, 2)
                this.pos = new Vector(600,400)
                break;
            case "game2":
                this.graphics.use(Resources.crab.toSprite())
                this.scale = new Vector(4,2)
                this.pos = new Vector(400,300)
                break;
            case "game3":
                this.graphics.use(Resources.smasnug.toSprite())
                this.scale = new Vector(4,2)
                this.pos = new Vector(400,300)
                break;
        }
    }
}