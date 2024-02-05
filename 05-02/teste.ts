import { Bird } from "./Bird";
import { Mammal } from "./Mammal";



const mamml = new Mammal("elefante", 10, "azul")
const bird = new Bird("eagle", 5, 4)

console.log(`name: ${Mammal.getName()}, weight: ${Mammal.getWeight()}, coat ${Mammal.coat}`);

Mammal.emitsound()
Mammal.breastfeed()
Mammal.setName("leopardo")
Mammal.setWeight(20)
Mammal.setCoat("yellow")

console.log(`name: ${Mammal.getName()}, weight: ${Mammal.getWeight()}, coat ${Mammal.coat}`);


