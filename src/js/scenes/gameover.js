import { Actor, Engine, Vector, Label, Font, Color, Random, CollisionGroupManager, CollisionGroup, BoundingBox, EdgeCollider, Scene, Timer, Input} from "excalibur"
import { Resources, ResourceLoader } from '../resources.js'
import { userInterface } from "../userinterface.js"
export class GameOver extends Scene {

    userInterface;
    game;
    constructor() {
        super({ width: 1280, height: 720 });
    }

    onInitialize(engine) {
        this.game = engine
        /*
        Resources.backgroundMusic.stop(0.7)
        Resources.gameoverMusic.play(0.7)
        const background = new Actor();
        background.graphics.use(Resources.Background.toSprite());
        background.pos = new Vector(500, 400);
        background.scale = new Vector(3, 3);
        this.add(background);
        
        let textField = new Label({
            text: "You died! Restart the page to try again",
            pos: new Vector(50, 100),
            font: new Font({
              family: "Determination Mono Web Regular",
              size: 26,
              color: Color.White,
              unit: FontUnit.Px
            }),
          });
    this.add(textField);
    */
    }
    onActivate(ctx){
        console.log(ctx.data)
        this.totalAmount = ctx.data
        this.userInterface = new userInterface(this, 1, this.totalAmount)
        this.add(this.userInterface)
    }
    onPreUpdate(game){
        let kb = this.game.input.keyboard
        if (kb.isHeld(Input.Keys.Space)) {
            this.game.goToScene('game1')
        }
    }
}