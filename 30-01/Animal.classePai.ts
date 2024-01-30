// classe pai.... exemplo, cria a classe pai para herdar para o filho, ou podendo herdar para mais filhos( subclass )

export class Animal{
    name:string;
    weight:number;

    constructor(name:string, weight:number){
        this.name = name
        this.weight = weight
    }
    eat(quantity:number): void{
        console.log("the animal has eaten  " + quantity);
        
    }
}

// classe filho ....exemplo, como herdar a classe do pai

export class Dog extends Animal{

    constructor(name:string, weight:number){
        super(name,weight)
    }

    bark(): void {
        console.log("au au");   

    }
}