

export class Animal{
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

    public setName(newName): string {
        return this.name = newName;
    }

    public setWeight(newWeight): number {
        return this.weight = newWeight;
    }

    public emitSound(): void {
        console.log("SOM...");
        
    }
}
