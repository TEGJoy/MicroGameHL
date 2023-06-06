import { Actor, Input, Random, Vector, clamp } from "excalibur"
import { saibamen } from "./saibamen";
export class genericPlayer extends Actor{
    game;
    scene;
    sprint;
    character;
    upgrade;
    skillsList;
    schmoove;
    constructor(scene){
        super({width:100, height:100})
        //this.graphics.use(Resources.baman.toSprite())
        //this.pos = new Vector(100, 300) 
        this.pointer.useGraphicsBounds = true
        this.scene = scene
        //this.schmoove = this.movement();
        //this.skillsList = new skills(["dash",400,-400])
        //this.upgrade = new nappa()
        //this.sprint = new dash(400, -400)
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
            yspeed = -300
            if(kb.isHeld(Input.Keys.ShiftLeft)){
                yspeed = this.skillsList.dashNegative()
            }
        }
        if (kb.isHeld(Input.Keys.S) || kb.isHeld(Input.Keys.Down)  || controller.at(0).getAxes(Input.Axes.LeftStickY) > 0.5) {
            yspeed = 300
            if(kb.isHeld(Input.Keys.ShiftLeft)){
                yspeed = this.skillsList.dashPositive()
            }
        }
        if (kb.isHeld(Input.Keys.A) || kb.isHeld(Input.Keys.Left) || controller.at(0).getAxes(Input.Axes.LeftStickX) < -0.5) {
            xspeed = -300
            if(kb.isHeld(Input.Keys.ShiftLeft)){
                xspeed = this.skillsList.dashNegative()
            }
        }
        if (kb.isHeld(Input.Keys.D) || kb.isHeld(Input.Keys.Right) || controller.at(0).getAxes(Input.Axes.LeftStickX) > 0.5) {
            xspeed = 300
            if(kb.isHeld(Input.Keys.ShiftLeft)){
                xspeed = this.skillsList.dashPositive()
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
    /*movement(posSpeed, negSpeed, engine){
        this.posSpeed = posSpeed
        this.negSpeed = negSpeed
        this.game = engine
        let yspeed = 0
        let xspeed = 0
        let kb = engine.input.keyboard
        let controller = engine.input.gamepads
        if (kb.isHeld(Input.Keys.W) || kb.isHeld(Input.Keys.Up)  || controller.at(0).getAxes(Input.Axes.LeftStickY) < -0.5) {
            yspeed = this.negSpeed
            if(kb.isHeld(Input.Keys.ShiftLeft)){
                yspeed = this.skillsList.dashNegative()
            }
        }
        if (kb.isHeld(Input.Keys.S) || kb.isHeld(Input.Keys.Down)  || controller.at(0).getAxes(Input.Axes.LeftStickY) > 0.5) {
            yspeed = this.posSpeed
            if(kb.isHeld(Input.Keys.ShiftLeft)){
                yspeed = this.skillsList.dashPositive()
            }
        }
        if (kb.isHeld(Input.Keys.A) || kb.isHeld(Input.Keys.Left) || controller.at(0).getAxes(Input.Axes.LeftStickX) < -0.5) {
            xspeed = this.negSpeed
            if(kb.isHeld(Input.Keys.ShiftLeft)){
                xspeed = this.skillsList.dashNegative()
            }
        }
        if (kb.isHeld(Input.Keys.D) || kb.isHeld(Input.Keys.Right) || controller.at(0).getAxes(Input.Axes.LeftStickX) > 0.5) {
            xspeed = this.posSpeed
            if(kb.isHeld(Input.Keys.ShiftLeft)){
                xspeed = this.skillsList.dashPositive()
            }
        }
        this.vel = new Vector(xspeed, yspeed)
    }
    */
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
    /*
    Upgrade(level){
        if(level == 1){
        this.character = level
        console.log("LETS FUCKING GOOO")
        this.kill()
        }
    }
    */
    /*
    onPostKill(){
        console.log("nappa spawn in")
        this.scene.addNewCharacter(new nappa(), 1)
    }
    */
}