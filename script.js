//complete this code
class Animal {
	constructor(species){
		this._species = species;
	}
	get species(){
		return this._species;
	}
	makeSound(sound){
		return sound;
	}
}

class Dog extends Animal {
	constructor(species){
		super(species);
	}
	bark(){
		console.log(`The ${this.species} makes a sound`);
	}
}

class Cat extends Animal {
	constructor(species){
		super(species);
	}
	purr(){
		console.log(`The ${this.species} makes a sound`);
	}
}

const myCat = new Cat("Siamese");
myCat.makeSound(); // Output: The Siamese makes a sound
myCat.purr(); // Output: purr

const myDog = new Dog("Golden Retriever");
myDog.makeSound(); // Output: The Golden Retriever makes a sound
myDog.bark(); // Output: woof



// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
