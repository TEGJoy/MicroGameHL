import { Actor, Engine, Vector, Label, Font, Color, Random, CollisionGroupManager, CollisionGroup, BoundingBox, EdgeCollider, Scene} from "excalibur"
import { Resources, ResourceLoader } from '../resources.js'
import { player } from '../player'
import { saibamen } from '../saibamen'
import { background } from '../background'
import { human } from '../human'
import { ui } from '../ui'
let games = ["game1", "game2", "game3"];
export class Game1 extends Scene {
    
    game;
    constructor() {
        super({ width: 800, height: 600 })
    }
    onInitialize(engine) {
        this.game = engine
    }

    onActivate(ctx) {
        console.log("Scene has started");
        this.startGame()
    }
    startGame() {
        console.log("start de game, scene 1!")
         //define consts
         const rand = new Random();
         this.add(new ui())

         //Background 
        const bg = new background()
        bg.placeBG("game1");
        this.add(bg);
    }
    
}