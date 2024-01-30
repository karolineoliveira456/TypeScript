




//exemplo 1
const myDog = new Dog("marley", 25)
console.log(myDog.name); // jeito sem colocar o privado 
console.log(myDog.getName()); //jeito certo, depois de colocar privado e criar o get

// exemplo 2
console.log(myDog.weight);
console.log(myDog);
myDog.weight = 50 //enquanto publico
console.log(myDog.weight);// enquanto publico

myDog.setWeight(45) // forma privada de trocar valor
console.log(myDog.getWeight()); // forma certa para visualizar a forma privada

