import {Actor, BaseAlign, Color, Font, FontStyle, Label, TextAlign, vec, Vector, Input} from "excalibur";
import { saibamen } from "./saibamen.js";
import { human } from "./human.js";
import { Resources } from "./resources.js"
import { Game1 } from "./scenes/game1.js";
export class userInterface extends Actor {
    mainText
    timerText
    human
    gameName
    scene
    timerText
    totalAmountPoints
    constructor(scene,gameover,totalAmount) {
        super();
        this.totalScore = 0;
        this.totalAmountPoints = totalAmount
        this.scene = scene
        this.gameover = gameover
        this.timerText = new Label({
            pos: new Vector(900, 50),
            text: `Time remaining: 60`,
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
    }
    
    onInitialize(engine){
        if(this.gameover == 1){
            this.gameOver()
        } else if(this.gameover == 2){
            this.explanation()
        } else {
        this.mainText = new Label({
            pos: new Vector(200, 50),
            text: `Points gained: ${this.totalScore}`,
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
       
        //console.log(this.gameName)
        //this.textChanger(engine, this.gameName)
        engine.add(this.mainText)
        engine.add(this.timerText)
        }
    }
    timer(time){
        this.timerText = new Label({
            pos: new Vector(900, 50),
            text: `Time remaining: ${time}`,
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
            this.scene.add(this.timerText)
            this.kill()
    }
    onPreUpdate(engine) {
/*
        let kb = engine.input.keyboard

        if (kb.isHeld(Input.Keys.S) && this.startText == 1) {
            this.mainText.pos = new Vector(200, 50);
            this.mainText.text =  `Points gained: ${this.totalScore}`;
            this.startText = 0;
            
      }
      */
    }
    updateScore(score){
        this.mainText.text = `Points gained: ${this.totalScore += score}`
        this.scene.upgradePlayer(this.totalScore)
    }
    gameOver(){
        this.gameOverText = new Label({
            pos: new Vector(500, 400),
            text: `Its all ogre, total amount of points: ${this.totalAmountPoints}`,
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
            this.scene.add(this.gameOverText)
    }
    totalAmount(){
        return this.totalScore
    }
    explanation(){
        this.gameOverText = new Label({
            pos: new Vector(500, 400),
            text: `Destroy all humans`,
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
            this.scene.add(this.gameOverText)
    }
}