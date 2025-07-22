/* 
    interface segmetation principle
    Clients should not be forced to depend on interfaces they do not use.

*/

// Violation
interface Machine {
  print(): void;
  scan(): void;
  fax(): void;
}

class OldPrinter implements Machine {
  print() {
    /* ok */
  }
  scan() {
    throw new Error("Not supported");
  } // ISP violation
  fax() {
    throw new Error("Not supported");
  }
}

// Fix
interface Printer {
  print(): void;
}
interface Scanner {
  scan(): void;
}

class SimplePrinter implements Printer {
  print() {
    /* logic */
  }
}
