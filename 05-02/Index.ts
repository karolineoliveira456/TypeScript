import { Animal } from "./Animal";
import { Mammal } from "./Mammal";
import { Bird } from "./Bird";


const myAnimal = new Animal("Pet", 10);
console.log(myAnimal.getName()); 
console.log(myAnimal.getWeight());

myAnimal.setName("Maria");
myAnimal.setWeight(20); 


const myMammal = new Mammal("SAGUA", 5, "White");
console.log(myMammal.getCoat());
myMammal.emitSound(); 
myMammal.breastfeed() 

const newBird = new Bird("EVA", 3, 9);
console.log(myMammal.getName());
console.log(myMammal.getWeight());
