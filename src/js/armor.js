import { Actor, Random, Vector } from "excalibur"
import { Resources } from "./resources"
export class Armor {
    hitpoints

    constructor(){
        this.hitpoints = 2
    }

    hit(){
        this.hitpoints -= 1
        console.log(this.hitpoints)
    }
}