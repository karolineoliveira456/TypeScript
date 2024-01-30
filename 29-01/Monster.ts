import { Warrior } from "./Warrior";

export class Monster{
    private name:string;
    private strenght:number;
    private life:number;

    constructor(name:string, strenght:number, life:number){
        this.name = name
        this.strenght = strenght
        this.life = life
    }

    public attack(myWarrior:Warrior):void{
        const damage = this.strenght;
        myWarrior.receiveDamage(damage),
        console.log(`${this.name} recebe ${damage} dano do guerreiro`);
    }

    public receiveDamage(damage:number): void{
        this.life -= damage
    }

    public getName(){
        return this.name
    }

    public getStrenght(){
        return this.strenght
    }

    public getLife(){
        return this.life
    }
}


//exemplo 1
const myDog = new Dog("marley", 25)
console.log(myDog.name); // jeito sem colocar o privado 
console.log(myDog.getName()); //jeito certo, depois de colocar privado e criar o get

// exemplo 2
console.log(myDog.weight);
console.log(myDog);
myDog.weight = 50 //enquanto publico
console.log(myDog.weight);// enquanto publico

myDog.setWeight(45) // forma privada de trocar valor
console.log(myDog.getWeight()); // forma certa para visualizar a forma privada


