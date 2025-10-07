function solution(obj, path){
    const keys = path.split('.');
    let value = obj;

    for (let i = 0; i < keys.length; i++) {

        value = value[keys[i]]
    }

    return value

}


const obj = {
  user: {
    name: "John",
    address: {
      city: "New York",
      zip: {
        code: 10001
      }
    }
  }
};

const path = "user.address.zip.code";

console.log(solution(obj, path))