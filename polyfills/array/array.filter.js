// Polyfilly of array.filter
// arr.filter((vale, idx, array) => {})

Array.prototype.myFilter = function(cb){
    const temp = [];

    for (let i = 0; i < this.length; i++) {
        if(cb(this[i], i, this)){temp.push(this[i])}
    }

    return temp
}

const arr = [1, 2, 4, 5]

console.log(arr.myFilter((el, i)=>(el%2==0)))