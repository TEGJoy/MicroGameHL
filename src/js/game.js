import '../css/style.css'
import { Actor, Engine, Vector, Label, Font, Color, Random, CollisionGroupManager, CollisionGroup, BoundingBox, EdgeCollider} from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { player } from './player'
import { saibamen } from './saibamen'
import { background } from './background'
import { human } from './human'
import { ui } from './ui'
let games = ["game1", "game2", "game3"];
export class Game extends Engine {
    
    constructor() {
        super({ width: 800, height: 600 })
        this.start(ResourceLoader).then(() => this.startGame())

        
    }

    startGame() {
        console.log("start de game!")
         //define consts
         const rand = new Random();
         this.add(new ui())

         //Background 
        const bg = new background()
        bg.placeBG(rand.pickOne(games));
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
        */
    }
    
}

new Game()
