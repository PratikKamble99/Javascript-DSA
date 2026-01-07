/* 
    Single responsibility principle
    Every class or module should only be responsible for one part of the functionality. 

*/

class Report {
  generate() {
    /* logic */
  }
  saveToFile() {
    /* file handling */
  }
}

// Follows SRP
class ReportGenerator {
  generate() {
    /* logic */
  }
}

class FileSaver {
  saveToFile() {
    /* file handling */
  }
}
