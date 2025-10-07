
const obj = {
    name: "pratik",
}

function getDetails(age, bike){
    console.log(`My Name is ${this.name} and I am ${age} years old. My favirote bike is ${bike}`)
}

// const details = getDetails.bind(obj)

// details(10, 'R1')

// It uses closure concept
Function.prototype.myBind = function(context={}){
    if(typeof this !== 'function')
        throw new error `${this} is not callable`

    context.fn = this

    return function(...args){
        return context.fn(...args)
    }
}

const details = getDetails.myBind(obj)
details(20, "MT")


