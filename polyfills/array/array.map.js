// Polyfilly of array.map
// arr.map((vale, idx, array) => {})

Array.prototype.myMap = function(cb){
    const temp = [];

    for (let i = 0; i < this.length; i++) {
        temp.push(cb(this[i], i, this))
    }

    return temp
}

const arr = [1, 2, 4, 5]

console.log(arr.myMap((el, i)=>(el*2)))