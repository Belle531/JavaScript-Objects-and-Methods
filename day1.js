const pet = {
   
    name: "Fluffy",        
    species: "Dog",        
    happiness: 50,       
  
    
    play: function() {
      this.happiness += 10; 
      return `You played with ${this.name}! Happiness is now ${this.happiness}.`; 
    },
  
    
    feed: function() {
      this.happiness += 20; 
      return `You fed ${this.name}! Happiness is now ${this.happiness}.`; 
    },
  
    
    status: function() {

      console.log(`Pet Name: ${this.name}, Species: ${this.species}, Happiness: ${this.happiness}.`);
    },
  
   
    rename: function(newName) {
      this.name = newName; 
      return `Your pet's new name is ${this.name}!`; 
    }
  };
  
  console.log("Initial Status:");
  pet.status();
  
  
  console.log("\nPlaying with the pet:");
  console.log(pet.play());
  
  
  console.log("\nStatus after playing:");
  pet.status();
  
  
  console.log("\nFeeding the pet:");
  console.log(pet.feed());
  
  
  console.log("\nStatus after feeding:");
  pet.status();
  

  console.log("\n--- Bonus Task: Renaming the pet ---");
  console.log(pet.rename('Sparky')); 