function createPet(name, species) {
    let happiness = 50;
  
    const feed = () => {
      const fedAmount = Math.floor (Math.random() * 21) + 10;
      happiness += fedAmount;
      return `Feeding ${name}! Happiness is now ${happiness}.`;
    };
  
    const status= () => {
      return `Pet Name: ${name}, Species: ${species}, Happiness: ${happiness}.`;
    };
  
    return {
      name: name,
      species: species,
      happiness: happiness,
      feed: feed,
      status: status,
    };
  }
  
  const dogKennel = [];
  const catKennel = [];
  const fishTank = []; 
  
  dogKennel.push(createPet("Rover", "Dog"));
  dogKennel.push(createPet("Buddy", "Dog"));
  dogKennel.push(createPet("Lucy", "Dog"));
  dogKennel.push(createPet("Max", "Dog"));
  dogKennel.push(createPet("Daisy", "Dog"));
  
  catKennel.push(createPet("Whiskers", "Cat"));
  catKennel.push(createPet("Mittens", "Cat"));
  catKennel.push(createPet("Oliver", "Cat"));
  catKennel.push(createPet("Luna", "Cat"));
  catKennel.push(createPet("Bella", "Cat"));
  
  fishTank.push(createPet("Goldie","Fish"));
  fishTank.push(createPet("Finny","Fish"));
  fishTank.push(createPet("Bubble","Fish"));
  fishTank.push(createPet("Nemo","Fish"));
  fishTank.push(createPet("Dory","Fish"));
  
  console.log("\n---Feeding Dogs ---");
  for (let i = 0; i < dogKennel.length; i++){
    const dog = dogKennel[i];
    console.log(dog.feed());
  }
  console.log("\n---Feeding Cats ---");
  for (let i = 0; i < catKennel.length; i++){
    const cat = catKennel[i];
    console.log(cat.feed());
  };
  
  console.log("\n---Feeding Fish ---"); 
  for (let i = 0; i < fishTank.length; i++){ 
    const fish = fishTank[i]; 
    console.log(fish.feed());
  };
  
  console.log("\n---Dog Kennel Final Status ---");
  for (let i = 0; i < dogKennel.length; i++) {
    const dog = dogKennel[i];
    console.log(dog.status());
  }
  
  console.log("\n---Cat Kennel Final Status ---");
  for (let i = 0; i < catKennel.length; i++) {
    const cat = catKennel[i];
    console.log(cat.status());
  }
  
  console.log("\n---Fish Tank Final Status ---");
  for (let i = 0; i < fishTank.length; i++) { 
    const fish = fishTank[i]; 
    console.log(fish.status()); 
  }