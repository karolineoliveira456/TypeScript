import { Animal } from "./Animal";

export class Bird extends Animal {

    private wingspan:number

    constructor(name: string, weight: number, wingspan: number) {
        super(name, weight);
        this.wingspan = wingspan;
    }

    getWinspan(): number {
        return this.wingspan
    }

    public fly(): void {
        console.log("The bird is flying...");       
    }
}
