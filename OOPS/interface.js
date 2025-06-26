// An interface defines a contract (a set of methods or properties) that a class must implement,
// without providing the actual implementation.
// Think of it as a blueprint without code.

interface Animal {
  name: string;
  makeSound(): void;
}

class Dog implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log("Bark!");
  }
}

const d = new Dog("Tommy");
d.makeSound(); // Bark!
