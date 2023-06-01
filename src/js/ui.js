import {Actor, BaseAlign, Color, Font, FontStyle, Label, TextAlign, vec, Vector, Input} from "excalibur";
import { saibamen } from "./saibamen.js";
import { human } from "./human.js";
import { Resources } from "./resources"
export class ui extends Actor {
    mainText
    human
    constructor() {
        super();
        this.totalScore = 0;
    }
    onInitialize(engine){
        this.mainText = new Label({
            pos: new Vector(300, 300),
            text: "Press the S key to begin",
            font: new Font({
                family: 'arial',
                // style: FontStyle.Italic,
                size: 40,
                strokeColor: Color.Black,
                lineWidth: 2,
                bold: true,
                color: Color.White,
                baseAlign: BaseAlign.Top,
                textAlign: TextAlign.Center
            })
        })
        engine.add(this.mainText)
    }
    onPreUpdate(engine) {

        let kb = engine.input.keyboard

        if (kb.isHeld(Input.Keys.S) && this.mainText.text == "Press the S key to begin") {
            this.mainText.pos = new Vector(200, 50);
            this.mainText.text =  "Points gained: 0";
            
            const player = new saibamen();
            //const fodder = new human();
            engine.add(player);
            for(let i = 0; i < 5; i++){
                console.log("Spawn in")
                engine.add(new human(this))
            }
        }
    }
    updateScore(score){
        this.mainText.text = `Points gained: ${this.totalScore += score}`
    }
}