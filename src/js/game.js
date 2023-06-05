import '../css/style.css'
import { Actor, Engine, Vector, Label, Font, Color, Random, CollisionGroupManager, CollisionGroup, BoundingBox, EdgeCollider, Scene} from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { player } from './player'
import { saibamen } from './saibamen'
import { background } from './background'
import { human } from './human'
import { ui } from './ui'
import { Game1 } from './scenes/game1'
let games = ["game1", "game2", "game3"];
export class Game extends Engine {
    
    constructor() {
        super({ width: 800, height: 600 })
        this.start(ResourceLoader).then(() => this.everythingLoaded())
    }
    everythingLoaded() {
        this.addScene('game1', new Game1())
        /*
        this.add('game2', new Game2())
        this.add('game3', new Game3())
        this.add('gameover', new GameOver())
        */
        this.goToScene('game1')
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
