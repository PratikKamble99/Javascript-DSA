/* 
  In This problem we are taking path as empty string for every iteration. 
  And updating path if object is nested
*/

/* 

if type if Object then create or append key to path // let newPath = `${path}${key}.`
else set value to created path // result[newPath] = value

*/

function flattenObject(obj) {
      const result = {}

    function flat(obj, path=''){
        for (const key in obj) {
            const value = obj[key];
            let newPath = `${path}${key}.`
            if(typeof value === 'object'){
                flat(value, newPath)
            }else{
                newPath = `${path}${key}`
                result[newPath] = value
            }
        }
    }

    flat(obj)

    return result
}

//For the purpose of user debugging.
console.log(flattenObject({ x: { b: { e: 3} }, c: 2 }));

module.exports = flattenObject;
