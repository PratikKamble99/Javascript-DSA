/* 
    liskov subtitution principle
    Subclasses must behave in such a way that they don’t break the expectations of the base class.

*/

// Wrong
class Bird {
  fly() {
    /* logic */
  }
}

class Ostrich extends Bird {
  fly() {
    throw new Error("Ostrich can't fly!");
  } // Violates LSP
}

// Correct
interface Bird {}
interface FlyingBird extends Bird {
  fly(): void;
}

class Sparrow implements FlyingBird {
  fly() {
    /* fly logic */
  }
}
class Ostrich implements Bird {
  // no fly method
}
