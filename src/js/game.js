import '../css/style.css'
import { Actor, Engine, Vector, Label, Font, Color, Random, CollisionGroupManager, CollisionGroup, BoundingBox, EdgeCollider, Scene} from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { player } from './player'
import { saibamen } from './saibamen'
import { background } from './background'
import { human } from './human'
import { Game1 } from './scenes/game1'
import { GameOver } from './scenes/gameover'
import { explanationScreen } from './scenes/explanationscreen'
export class Game extends Engine {
    
    constructor() {
        super({ width: 1280, height: 720 })
        this.start(ResourceLoader).then(() => this.everythingLoaded())
    }
    everythingLoaded() {
        this.addScene('game1', new Game1())
        this.addScene('explanationScreen', new explanationScreen())
        this.addScene('gameover', new GameOver())
        /*
        this.add('game3', new Game3())
        this.add('gameover', new GameOver())
        */
        this.goToScene('explanationScreen')
    }
    /*
    startGame() {
        console.log("start de game!")
        
        /*
         //define consts
         const rand = new Random();
         this.add(new ui())

         //Background 
        const bg = new background()
        bg.placeBG("game1");
        this.add(bg);
        
        /*
        const player = new saibamen();
        const fodder = new human();
        this.add(player);
        for(let i = 0; i < 5; i++){
            this.add(fodder)
        }
        */
        /* voorbeeldcode
        const fish = new Actor()
        fish.graphics.use(Resources.Fish.toSprite())
        fish.pos = new Vector(400, 300)
        fish.vel = new Vector(-10,0)
        this.add(fish)
        
    }
    */
}

new Game()
