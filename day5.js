function createPet(name, species) {
    let happiness = 50;
    let energy = Math.floor(Math.random() * 51); // Random energy between 0 and 50
  
    const play = () => {
      happiness += 10;
      energy -= 15;
      return `You played with ${name}! Happiness is now ${happiness}, Energy is now ${energy}.`;
    };
  
    const feed = () => {
      const fedAmount = Math.floor(Math.random() * 21) + 10;
      happiness += fedAmount;
      energy += 25;
      return `You fed ${name}! Happiness is now ${happiness}, Energy is now ${energy}.`;
    };
  
    const status = () => {
      return `Pet Name: ${name}, Species: ${species}, Happiness: ${happiness}, Energy: ${energy}.`;
    };
  
    return {
      name: name,
      species: species,
      happiness: happiness,
      energy: energy,
      play: play,
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
  
  fishTank.push(createPet("Goldie", "Fish"));
  fishTank.push(createPet("Finny", "Fish"));
  fishTank.push(createPet("Bubbles", "Fish"));
  fishTank.push(createPet("Nemo", "Fish"));
  fishTank.push(createPet("Dory", "Fish"));
  
  console.log("\n--- Playing with Dogs ---");
  for (let i = 0; i < dogKennel.length; i++) {
    for (let j = 0; j <= i; j++) {
      console.log(dogKennel[i].play());
    }
    console.log(dogKennel[i].status());
  }
  
  console.log("\n--- Playing with Cats ---");
  for (let i = 0; i < catKennel.length; i++) {
    for (let j = 0; j < 2 - i; j++) {
      console.log(catKennel[i].play());
    }
    console.log(catKennel[i].status());
  }
  
  console.log("\n--- Playing with Fish ---");
  for (let i = 0; i < fishTank.length; i++) {
    const playTimes = Math.floor(Math.random() * 3);
    for (let j = 0; j < playTimes; j++) {
      console.log(fishTank[i].play());
    }
    console.log(fishTank[i].status());
  }
  
  console.log("\n--- Conditional Feeding of Dogs ---");
  for (let i = 0; i < dogKennel.length; i++) {
    const dog = dogKennel[i];
    if (dog.energy < 30) {
      console.log(`\n${dog.name} has low energy (${dog.energy}). Feeding...`);
      console.log(dog.feed());
      console.log(dog.status());
    } else {
      console.log(`${dog.name} has sufficient energy (${dog.energy}). Not feeding.`);
    }
  }
  
  console.log("\n--- Conditional Feeding of Cats ---");
  for (let i = 0; i < catKennel.length; i++) {
    const cat = catKennel[i];
    if (cat.energy < 30) {
      console.log(`\n${cat.name} has low energy (${cat.energy}). Feeding...`);
      console.log(cat.feed());
      console.log(cat.status());
    } else {
      console.log(`${cat.name} has sufficient energy (${cat.energy}). Not feeding.`);
    }
  }
  
  console.log("\n--- Conditional Feeding of Fish ---");
  for (let i = 0; i < fishTank.length; i++) {
    const fish = fishTank[i];
    if (fish.energy < 30) {
      console.log(`\n${fish.name} has low energy (${fish.energy}). Feeding...`);
      console.log(fish.feed());
      console.log(fish.status());
    } else {
      console.log(`${fish.name} has sufficient energy (${fish.energy}). Not feeding.`);
    }
  }