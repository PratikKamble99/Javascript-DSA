//Same method name behaves differently based on the object/class.

class Animal {
  makeSound() {
    console.log("Some sound");
  }
}

class Cat extends Animal {
  makeSound() {
    console.log("Meow");
  }
}

class Cow extends Animal {
  makeSound() {
    console.log("Moo");
  }
}

const animals = [new Animal(), new Cat(), new Cow()];
animals.forEach((animal) => animal.makeSound());
// Some sound
// Meow
// Moo
