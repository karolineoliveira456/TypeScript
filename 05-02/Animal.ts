export class Animal {
    private name:string
    private weight:number

    constructor(name:string, weight:number){
        this.name = name;
        this.weight = weight;
    }

    public getName(): string {
        return this.name;
    }

    public getWeight(): number {
        return this.weight;
    }

    public setName(name: string): void {
         this.name = name;
    }

    public setWeight(weight: number): void {
         this.weight = weight;
    }

    public emitSound(): void {
        console.log("the animal is making a Sound...");
        
    }
}



