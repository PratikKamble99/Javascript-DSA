// const promise1 = new Promise((res, rej) => rej('error 1'));
const promise1 = new Promise((res, rej) => setTimeout(() => {
    res('Promise 1 resolve')
}, 10000));

// const promise2 = new Promise( res => res('promise 2'));
const promise2 = new Promise((res, rej) => setTimeout(() => {
    res('Promise 2 resolve')
}, 5000));

// const promise3 = new Promise( res => res('promise 3'));

// promise1.then( res => {
//     console.log("RESULT: ",res)
//     return promise2
// })
// .then( res => {
//     console.log(res)    
//     return promise3
// })
// .then( res => {
//     console.log(res)
// }).catch( err => console.log("ERROR: ",err))

async function handlePromise(){
    console.log("hello world");

    const val1 = await promise1;
    console.log(val1)

    const val2 = await promise2;
    console.log(val2)
}

setTimeout(()=>{
    handlePromise()
}, 10000)