

export class Animal{
    private name:string
    private idade:number

    constructor(name:string, idade:number){
        this.name = name
        this.idade = idade
    }

    public getName(){
        return this.name
    }

    public getIdade(){
        return this.idade
    }

    public emitSound(){
        console.log("SOM");
        
    }
}
