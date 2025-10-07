// function.call({}, parameters)


const obj = {
    name: "pratik",
}

function getName(age){
    console.log(`My Name is ${this.name} and I am ${age} years old`)
}

// getName.call(obj, 25)

// function.call(context, ...args)
Function.prototype.myCall = function(context={}, ...args){
    if(typeof this !== 'function')
        throw new error `${this} is not callable`

    context.fn = this
    context.fn(...args)
}

getName.myCall(obj, 27)