// function.apply(obj, [...args])

const obj = {
    name: "pratik",
}

function getDetails(age, bike){
    console.log(`My Name is ${this.name} and I am ${age} years old. My favirote bike is ${bike}`)
}

// getDetails.apply(obj, [27, 'R1'])

// function.apply(context, [args])
Function.prototype.myApply = function(context={}, args){
    if(typeof this !== 'function')
        throw new error `${this} is not callable`

    context.fn = this
    context.fn(...args)
}

getDetails.myApply(obj, [27, 'R1'])