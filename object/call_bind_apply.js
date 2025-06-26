// 1) call() = The call() method of Function instances calls this function with a given this value and arguments provided individually.

// Function borrowing

const userDetails = {
  name:'Pratik',
  age:21
}

const userDetails2 = {
  name:'Pravin',
  age:28
}

const printDetails = function(state, country){
  console.log(this.name+ ' ' + state + ' ' + country)
}

printDetails.call(userDetails, "mumbai", "india");
// printDetails.call(userDetails2);

// Difference between call and apply
// passing arguments provided as an arrayy while using apply

printDetails.apply(userDetails2,["pune", "india"]);

// BIND
// we can make copy of function and invoke it later

const printDetailsBind = printDetails.bind(userDetails2, "chennai", "india");

printDetailsBind();