// String manupulation 

// in function call using back ticks,  string without template litral  passed as single arg(array arg) and in templete litral words treated as individual argumnets

const name="pratik";

console.log`my name ${"pratik"}`;

function myName(string, name, age){
  console.log(string, name, age)
};

myName`you are good, ${"pratik"} ${21}`

// know what ASCCI of char from string
console.log(name.charCodeAt(0));

// convert ASCCI code into char
console.log(String.fromCharCode(65))

