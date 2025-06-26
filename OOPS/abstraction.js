//Hiding complex logic and showing only essential parts.

class Car {
  startEngine() {
    this.#injectFuel();
    this.#ignite();
    console.log("Car started");
  }

  #injectFuel() {
    console.log("Fuel injected");
  }

  #ignite() {
    console.log("Engine ignited");
  }
}

const myCar = new Car();
myCar.startEngine(); // Fuel injected -> Engine ignited -> Car started
// myCar.#injectFuel() => ❌ Not accessible
