import { Animal } from "./Animal";

export class Mammal extends Animal {

    private coat:string

    constructor(name: string, weight: number, coat: string) {
        super(name, weight);
        this.coat = coat
    }

    public getCoat():string{
        return this.coat
    }

    public setCoat(coat:string): void{
        this.coat = coat
    }

    public breastfeed(): void {
        console.log(`The mammal is breastfeeding...`);
    }
}



