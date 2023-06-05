import { Actor, Engine, Vector, Label, Font, Color, Random, CollisionGroupManager, CollisionGroup, BoundingBox, EdgeCollider, Scene, Timer, randomInRange} from "excalibur"
import { Resources, ResourceLoader } from '../resources.js'
import { saibamen } from '../saibamen'
import { background } from '../background'
import { human } from '../human'
import { userInterface } from "../userinterface.js"
import { senzu } from '../senzu.js'
let games = ["game1", "game2", "game3"];
export class Game1 extends Scene {
    
    game;
    userInterface;
    character;
    remainingTime;
    senzuSpawned;
    constructor() {
        super({ width: 1280, height: 720 })
        this.character = new saibamen(this)
        this.userInterface = new userInterface(this)
    }
    onInitialize(engine) {
        this.game = engine
        this.remainingTime = 60
        this.senzuSpawned = 0
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
         this.rand = new Random()
         const timer = new Timer({
            fcn: () => this.spawnHumans(),      
            repeats: true,      
            interval: 2000,  
        })
        const senzuTimer = new Timer({
            fcn: () => this.spawnSenzu(),
            repeats: true,
            interval: this.rand.integer(1000, 50000)
        })  
        const timeTimer = new Timer({
            fcn: () => this.updateTimer(),      
            repeats: true,      
            interval: 1000,  
        }) 
        this.game.currentScene.add(timer) 
        this.game.currentScene.add(timeTimer) 
        this.game.currentScene.add(senzuTimer)
        timer.start()
        timeTimer.start()
        senzuTimer.start()
    }

    loadEverything() {
        //const player = new saibamen();
            //const fodder = new human();
            this.add(this.player)
            
    }
    spawnHumans(){
        let a = new human(this.userInterface)
        this.add(a)
        const timer = new Timer({
            fcn: () => this.despawnHuman(a),      
            repeats: false,      
            interval: 3000,  
        })
        this.game.currentScene.add(timer)
        timer.start()  
    }
    despawnHuman(a){
        console.log("test")
        a.dissapear()
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
    spawnSenzu(){
        if(this.senzuSpawned == 0){
            //do something
            this.senzuSpawned = 1;
            let senzuBean = new senzu(this);
            this.add(senzuBean)
            const timer = new Timer({
                fcn: () => this.despawnSenzu(senzuBean),      
                repeats: false,      
                interval: 3000,  
            })
            this.game.currentScene.add(timer)
            timer.start()  
        } 
        return
    }
    despawnSenzu(senzuBean){
        senzuBean.dissapear()
        this.senzuSpawned = 0
    }
}