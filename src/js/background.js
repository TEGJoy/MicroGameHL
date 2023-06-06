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
                Resources.bnsSong.play(0.3)
                this.scale = new Vector(1.5, 2)
                this.pos = new Vector(600,400)
                break;
            case "game2":
                this.graphics.use(Resources.crab.toSprite())
                this.scale = new Vector(3,2)
                this.pos = new Vector(400,300)
                break;
            case "game3":
                this.graphics.use(Resources.smasnug.toSprite())
                this.scale = new Vector(3,2)
                this.pos = new Vector(400,300)
                break;
            case "game4":
                this.graphics.use(Resources.berry.toSprite())
                this.scale = new Vector(2,2)
                this.pos = new Vector(700,300)
                break;
            case "game5":
                this.graphics.use(Resources.homah.toSprite())
                this.scale = new Vector(7,5)
                this.pos = new Vector(700,300)
                break;
            case "game6":
                    this.graphics.use(Resources.ps.toSprite())
                    Resources.pss.play(0.3)
                    this.scale = new Vector(3,2)
                    this.pos = new Vector(700,300)
                    break;
        }
    }
}