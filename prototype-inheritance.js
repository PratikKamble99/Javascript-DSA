// In JS every thing is Object

// object prototype inheritance
// don't use directly __proto__ property in js. use in-build functions instead of it

const obj1 = {
    x1: "Pratik",
}

const obj2 = {
    x2: "Pravin",
    __proto__: obj1 // this point to obj1 object that means you can access obj1 properties => this called prototype / object inheritance
}

const obj3 = {
    x3: "Prasad",
    __proto__: obj2
}

console.log(obj3.x1);


class Student {
    constructor(){
        this.name = "Pratik-2";
    }

    getName(){
        // return this.name
        return 'In prototype'
    }
}

const s1 = new Student();
console.log(s1.getName()); // Pratik

const s2 = { __proto__ : Student.prototype};

console.log(s2.getName()) // will not access name this because s2 lost context of this 
