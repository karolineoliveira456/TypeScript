import { Monster } from "./Monster";

export class Warrior {
    private name:string;
    private type:string;
    private strenght:number;
    private life:number;

    constructor(name:string, type:string, strenght:number){
        this.name = name
        this.type = type;
        this.strenght = strenght;
        this.life = 100;
    }
    
    public attack(myMonster:Monster):void{
        const damage = this.strenght;
        myMonster.receiveDamage(damage),
        console.log(`${this.name} recebe ${damage} dano do guerreiro`);
    }

    public receiveDamage(damage:number): void{
        this.life -= damage
    }

    public getName(){
        return this.name
    }

    public getType(){
        return this.type
    }
    
    public getStrenght(){
        return this.strenght
    }

    public getLife(){
        return this.life
    }
} 

