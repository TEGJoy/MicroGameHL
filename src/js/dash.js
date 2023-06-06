import { saibamen } from "./saibamen";
import { skills } from "./skills";
export class dash{
    posSpeed;
    negSpeed;
    constructor(posSpeed, negSpeed){
        this.posSpeed = posSpeed
        this.negSpeed = negSpeed
    }
    dashPositive(){
     return this.posSpeed
    }
    dashNegative(){
    return this.negSpeed
    }
}