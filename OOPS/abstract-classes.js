//An abstract class is a class that cannot be instantiated directly and is meant to be inherited by other classes.
// It often contains abstract methods, which must be implemented by derived (child) classes.

class Shape {
  constructor() {
    if (new.target === Shape) {
      throw new Error("Cannot instantiate abstract class Shape directly");
    }
  }

  getArea() {
    throw new Error("Abstract method 'getArea' must be implemented");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}

const c = new Circle(5);
console.log(c.getArea()); // 78.53981633974483

const s = new Shape(); // ❌ Error: Cannot instantiate abstract class Shape directly
s.getArea(); // ❌ Error: Abstract method 'getArea' must be implemented
