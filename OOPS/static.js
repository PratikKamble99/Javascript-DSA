//Methods or properties that belong to the class, not instances.
/* 

  1. Static variables are class-level variables and are shared across all instances of a class. 
  Only one copy of each static variable is created, and it is shared by all objects.
  
  2. Static methods are also class-level and are shared across all objects. 
  Only one copy of each static method exists, regardless of the number of objects created.


*/
class MathUtils {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtils.add(5, 3)); // 8
