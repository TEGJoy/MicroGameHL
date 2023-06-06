import { Actor, Input, Random, Vector, clamp } from "excalibur"
import { Resources } from "./resources"
import { human } from "./human"
import { senzu } from "./senzu"
import { dash } from "./dash"
import { vegeta } from "./vegeta"
import { skills } from "./skills"
//import { dash } from "./dash";
export class nappa extends Actor {
    game;
    scene;
    sprint;
    skillsList;
    constructor(scene){
        super({width:100, height:100})
        this.graphics.use(Resources.baman.toSprite())
        this.pos = new Vector(100, 500) 
        this.pointer.useGraphicsBounds = true
        this.scene = scene
        this.skillsList = new skills(["dash",400,-400])
        this.sprint = new dash(600, -600)
        console.log(this.sprint)
        //this.dash = new dash()
    }
    onInitialize(engine){
        this.game = engine
        engine.input.gamepads.enabled = true;
        this.on('collisionstart', (event) => this.hitSomething(event))
    }
    onPreUpdate(engine) {

        let xspeed = 0
        let yspeed = 0

        let kb = engine.input.keyboard
        let controller = engine.input.gamepads
        if (kb.isHeld(Input.Keys.W) || kb.isHeld(Input.Keys.Up)  || controller.at(0).getAxes(Input.Axes.LeftStickY) < -0.5) {
            yspeed = -500
            if(kb.isHeld(Input.Keys.ShiftLeft)){
                yspeed = this.sprint.dashNegative()
            }
        }
        if (kb.isHeld(Input.Keys.S) || kb.isHeld(Input.Keys.Down)  || controller.at(0).getAxes(Input.Axes.LeftStickY) > 0.5) {
            yspeed = 500
            if(kb.isHeld(Input.Keys.ShiftLeft)){
                yspeed = this.sprint.dashPositive()
            }
        }
        if (kb.isHeld(Input.Keys.A) || kb.isHeld(Input.Keys.Left) || controller.at(0).getAxes(Input.Axes.LeftStickX) < -0.5) {
            xspeed = -500
            if(kb.isHeld(Input.Keys.ShiftLeft)){
                xspeed = this.sprint.dashNegative()
            }
        }
        if (kb.isHeld(Input.Keys.D) || kb.isHeld(Input.Keys.Right) || controller.at(0).getAxes(Input.Axes.LeftStickX) > 0.5) {
            xspeed = 500
            if(kb.isHeld(Input.Keys.ShiftLeft)){
                xspeed = this.sprint.dashPositive()
            }
        }

        this.vel = new Vector(xspeed, yspeed)
        // blijf binnen beeld
        this.pos.x = clamp(this.pos.x, this.width/2, engine.drawWidth - this.width/2);
        this.pos.y = clamp(this.pos.y, this.height/2, engine.drawHeight - this.height/2);
    }
    onPostUpdate(engine){
        let controller = engine.input.gamepads
        //console.log(controller.at(0).getAxes(Input.Axes.LeftStickX))
    }
    hitSomething(event){
        if(event.other instanceof human) {
                console.log("Boom");
                event.other.hitBySaibamen();
        }
        if(event.other instanceof senzu){
            console.log("Tasty")
            event.other.hitBySaibamen();
        }
    }
    Upgrade(level){
        if(level == 2){
            this.character = level
            console.log("LETS FUCKING GOOO EVEN MOREEEEEE")
            this.kill()
        }
    }
    onPostKill(){
        this.scene.addNewCharacter(new vegeta(), 2)
    }
}