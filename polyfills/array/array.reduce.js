// Polyfilly of array.filter
// arr.map((vale, idx, array) => {})

Array.prototype.myReduce = function(cb, initial){
    for (let i = 0; i < this.length; i++) {
        initial = initial ? cb(this[i], initial): this[i]
    }

    return initial
}

const arr = [1, 2, 4, 5]

console.log(arr.myReduce((el, total)=>(total*el)))