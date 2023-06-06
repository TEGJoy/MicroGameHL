import { Actor } from "excalibur";
import { saibamen } from "./saibamen";
import { dash } from "./dash";
export class skills{
    as;
    dash;
    constructor(abilities){
        this.as = abilities
        console.log(this.as)
        this.createAbilities(this.as)
    }
    dashNegative(){
        return this.dash.dashNegative()
    }
    dashPositive(){
        return this.dash.dashPositive()
    }
    createAbilities(a){
        if(a.includes("dash")){
            console.log("dash included");
            this.dash = new dash(this.as[1], this.as[2])
        }
        if(a.includes("timeStop")){
            //do something
        }
    }
}