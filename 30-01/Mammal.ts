class Mammal extends Animal {

    private coat: string;

    constructor(name: string, weight: number, coat: string) {
        super(name, weight);
        this.coat = coat;
    }

    public getCoat(): string {
        return this.coat;
    }

    public breastfeed(): void {
        console.log(`O mamifero esta amamentando...`);
    }
}
