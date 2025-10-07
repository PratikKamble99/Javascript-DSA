
const handleThrotle = (cb, delay) => {
    let lastUsed = 0;
    return function(...args){
        const now = Date.now(); 
        if(now - lastUsed >= delay){
            lastUsed = now;
            cb(...args)
        }
    }
}


const fn = handleThrotle((()=>{
    console.log(Date.now())
}),1000)

document.addEventListener('mousemove',fn)


const debounceFn = (cb, delay) => {
    let timer = 0
    return function(...args){
        if(timer) clearTimeout(timer)

        timer = setTimeout(()=>cb(...args),delay)
    }
}

const fn2 = debounceFn((name)=>{ console.log(name)}, 5000)

fn2('OPratik')
fn2('Prasasstik')
fn2('sasasas')