console.log("--- 'this' in the Global Scope ---");
console.log("Value of 'this' outside any function:", this); 


console.log("\n--- 'this' in a Regular Function Call ---");
function regularFunction() {
  console.log("Value of 'this' inside a regular function:", this); 
}
regularFunction();


console.log("\n--- 'this' in Method Invocation ---");
const pet = {
  name: "Fluffy",
  species: "Dog",
  happiness: 50,
  play: function() {
    console.log("'this' inside play():", this);
    this.happiness += 10;
    return `You played with ${this.name}! Happiness is now ${this.happiness}.`;
  },
  feed: function() {
    console.log("'this' inside feed():", this);
    this.happiness += 20;
    return `You fed ${this.name}! Happiness is now ${this.happiness}.`;
  },
  status: function() {
    console.log("'this' inside status():", this);
    console.log(`Pet Name: ${this.name}, Species: ${this.species}, Happiness: ${this.happiness}.`);
  },
  rename: function(newName) {
    console.log("'this' inside rename():", this);
    this.name = newName;
    return `Your pet's new name is ${this.name}!`;
  }
};

pet.status();
console.log(pet.play());
pet.status();
console.log(pet.feed());
pet.status();
console.log(pet.rename('Sparky'));
pet.status();


console.log("\n--- 'this' in Arrow Functions ---");
const arrowPet = {
  name: "Whiskers",
  sound: "Meow",
  makeSound: () => {
    console.log("'this' inside arrow function:", this); 
    console.log(this.sound); 
  }
};
arrowPet.makeSound();

function outerFunction() {
  this.outerVar = "Outer Value";
  setTimeout(() => {
    console.log("'this' inside arrow in setTimeout:", this); 
    console.log(this.outerVar);
  }, 100);
}
outerFunction();