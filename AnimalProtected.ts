export class Animal {
    protected name:string
    protected weight:number

    constructor(name:string, weight:number){
        this.name = name;
        this.weight = weight;
    }

    public emitSound(): void {
        console.log("the animal is making a Sound...");
        
    }
}
