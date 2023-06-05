import { Actor, Engine, Vector, Label, Font, Color, Random, CollisionGroupManager, CollisionGroup, BoundingBox, EdgeCollider, Scene, Timer} from "excalibur"
import { Resources, ResourceLoader } from '../resources.js'
import { saibamen } from '../saibamen'
import { background } from '../background'
import { human } from '../human'
import { userInterface } from "../userinterface.js"
let games = ["game1", "game2", "game3"];
export class Game1 extends Scene {
    
    game;
    userInterface;
    character;
    remainingTime;
    constructor() {
        super({ width: 1280, height: 720 })
        this.character = new saibamen(this)
        this.userInterface = new userInterface(this)
    }
    onInitialize(engine) {
        this.game = engine
        this.remainingTime = 60
        /*
        const timer = new Timer({
            fcn: () => this.spawnHumans("extraParam"),      
            repeats: true,      
            interval: 500,  })  
        engine.currentScene.add(timer)  
        timer.start()
        */
    }
    onActivate(ctx) {
        console.log("Scene has started");
        this.startGame()
    }
    startGame() {
         //Background 
         const bg = new background()
         bg.placeBG("game1");
         this.add(bg);
        console.log("start de game, scene 1!")
         this.add(this.userInterface)
         this.add(this.character)
         const timer = new Timer({
            fcn: () => this.spawnHumans(),      
            repeats: true,      
            interval: 2000,  })  
        const timeTimer = new Timer({
            fcn: () => this.updateTimer(),      
            repeats: true,      
            interval: 1000,  }) 
        this.game.currentScene.add(timer) 
        this.game.currentScene.add(timeTimer) 
        timer.start()
        timeTimer.start()
        
    }

    loadEverything() {
        //const player = new saibamen();
            //const fodder = new human();
            this.add(this.player)
            
    }
    spawnHumans(){
        console.log("test")
        this.add(new human(this.userInterface))
    }
    onPreUpdate(game){
        console.log(this.userInterface.totalAmount())
        if(this.remainingTime == 0){
            console.log("balls")
            this.game.goToScene('gameover', this.userInterface.totalAmount())
        }
    }
    updateTimer(){
        this.userInterface.timerText.text = `Time remaining: ${this.remainingTime--}`
    }
    upgradePlayer(total){
        if(total >= 10){
            this.character.Upgrade()
        }
    }
    newSaibamen(color){
        console.log(color)
    }
}